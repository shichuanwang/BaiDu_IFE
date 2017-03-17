/*
    加载页面时执行的方法
*/

(function() {
    // 设置导航条
    var nav = "<div style='width:1000px;margin:0px auto;'>";
    var headerNav = document.getElementById("header-nav");
    for(var n=0; n<G_navData.length; n++) {
        nav += "<p style='"+styles.navline+"' >"+
                    "<a href='javascirpt:void(0);' data-type='"+G_navData[n].navType+"' onclick='selectSourceType(this)'>"+G_navData[n].text+"</a>"+
               "</p>";
    }
    headerNav.innerHTML = nav+"</div>";

    // content-left 内容添加
    var contentaside = document.getElementById("content-left"),
        showAside = "", linedata, line;
    for(var i=0; i<G_webSource.length; i++) {
        showAside += "<div style='"+styles.webfont.wrapper+"'><div style='"+styles.webfont.title+"'>"+G_webSource[i].title+"</div>";
        for(var j=0; j<G_webSource[i].content.length; j++){
            linedata = G_webSource[i].content[j];
            showAside += "<p style='"+styles.webfont.type+"'>"+linedata.type+"</p>";
            for(var k=0; k<linedata.webfont.length; k++) {
                line = linedata.webfont[k];
                showAside += "<span style='"+styles.webfont.webfont+"'><a href='"+line.url+"' title='"+line.discrible+"'>"+line.name+"</a></span>";
            }
        }
        showAside += "</div>";
    }
    contentaside.innerHTML = showAside;


    // 设置IFE 任务显示图片 
    var question = document.getElementById("question");
    var span = document.getElementsByClassName("close")[0];
    if(question){
        var img = question.getElementsByTagName("img")[0];
        img.onclick = function() {
            this.style.width = "900px";
            question.style.width = "900px";
            span.style.display = "block";
            span.style.zIndex = "100";
        }
        span.onclick = function() {
            var img = question.getElementsByTagName("img")[0]
            question.style.width = "500px";
            img.style.width = "500px";
            span.style.display = "none";
            span.style.zIndex = "10";
        }
    }


    // load代码片段
    var snippetContent = document.getElementsByClassName("snippet-content");
    if(snippetContent){
        var text="",dictText = "";
        for(var i=0; i< snippetContent.length; i++) {
            text = snippetContent[i].innerText;
            if( text.indexOf("var") >　-1) {
                dictText = text.substr(text.indexOf("var"),3)
                snippetContent[i].innerHTML = text.replace(dictText, "<i style='color:#a0d2ec;'>var</i>");
            }

            if( text.indexOf("function") >　-1) {
                dictText = text.substr(text.indexOf("function"),8)
                snippetContent[i].innerHTML = text.replace(dictText, "<i style='color:#a0d2ec;'>function</i>");
            }

        }
    }
})()

// 选择导航内容
function selectSourceType(obj){
    var showContent = "<div>",
        sourceType = (typeof obj == "string") ? "index":obj.getAttribute("data-type"),
        sourceData = G_contentSource[sourceType],
        fenYeDiv = document.getElementById("content-modle-fenye"),
        dataLength = 0,
        contentModle = document.getElementById("content-modle-showcontent");
    // 设置主区内容分页
    if(sourceData.length < 11) {
        fenYeDiv.innerHTML = "<span id='pageCount'>共1页</span>"+
                        "<span id='beforePage' class='beforepage-false'>上一页</span>"+
                        "<span id='nowPage' style='color:blue;'>第1页</span>"+
                        "<span id='nextPage' class='nextpage-false'>下一页</span>";
        dataLength = sourceData.length;
    } else if( sourceData.length > 10 ) {
        fenYeDiv.innerHTML = "<span id='pageCount'>共"+Math.ceil(sourceData.length/10)+"页</span>"+
                        "<span id='beforePage' class='beforepage-ture' onclick=\"fenye( '"+sourceType+"', 'pre')\">上一页</span>"+
                        "<span id='nowPage' style='color:blue;' data-nowPage='1'>第1页</span>"+
                        "<span id='nextPage'  class='nextpage-true' onclick=\"fenye( '"+sourceType+"', 'next')\">下一页</span>";
        dataLength = 10;
    }
    // 设置主区内容显示
    for(var i=0; i<dataLength; i++) {
        showContent += "<p class='"+sourceData[i].titleClass+"'><i style='color:#9dccb6;font-size:14px;'>["+sourceData[i].type+"]</i>. "+sourceData[i].title+"</p>"+
                       "<p class='"+sourceData[i].contentClass+"'>"+sourceData[i].discription+
                            "... <a href='"+sourceData[i].linkPath+"' class='"+sourceData[i].aStyle+"'>更多>></a>"+
                        "</p>";
    }
    showContent += "</div>";
    contentModle.innerHTML = showContent;
}

// data 数据源 ， page 当前页面， dict 切换方向
function fenye( sourcetype, dict){
    var nowPage = document.getElementById("nowPage"),
        page = parseInt(nowPage.getAttribute("data-nowPage")),
        contentModle = document.getElementById("content-modle-showcontent"),
        data = G_contentSource[sourcetype],
        showContent = "<div>",
        starNum = 0, endNum = data.length;
    if( dict == "pre") {
        if(page > 1 ) {
            page = page - 1;
            nowPage.innerHTML = "第"+page+"页";
            nowPage.setAttribute("data-nowPage",page);
        }
    }else if( dict == "next") {
        if(page < Math.ceil(data.length/10) ) {
            page = page + 1;
            nowPage.innerHTML = "第"+page+"页";
            nowPage.setAttribute("data-nowPage",page);
            
        }
    }
    starNum = (page-1)*10;
    endNum = (data.length-starNum > 10) ? (starNum+10):  data.length;
    for(var i= starNum; i< endNum; i++) {
        showContent += "<p class='"+data[i].titleClass+"'><i style='color:#9dccb6;font-size:14px;'>["+data[i].type+"]</i>. "+data[i].title+"</p>"+
                       "<p class='"+data[i].contentClass+"'>"+data[i].discription+
                            "... <a href='"+data[i].linkPath+"' class='"+data[i].aStyle+"'>更多>></a>"+
                        "</p>";
    }
    showContent += "</div>";
    contentModle.innerHTML = showContent;
}


// 给代码片段写入内容的共用方法
// snippet 翻译为: 代码段
// snippetdata 的数据格式如下:
//  snippetdata = {
//    "data-datasource的属性值" :["test","",""]
//  }
function setSnippetContext( snippetdata ) {
    var snippetTag = document.getElementsByClassName("snippet"),
        datasource = "",
        lineDataSource = [],
        content = "";
    for(var i=0; i<snippetTag.length; i++) {
        datasource = snippetTag[i].getAttribute("data-datasource");
        if(datasource && snippetdata[datasource]) {
            lineDataSource = snippetdata[datasource];
            content = "<table>";
            for(var j=0; j<lineDataSource.length; j++) {
                content += "<tr><td class='snippet-order' type='"+(j+1)+"'>"+(j+1)+"</td>"+ 
                                "<td class='snippet-content' type='"+(j+1)+"'>"+lineDataSource[j]+"</td>"+
                           "</tr>";
            }
            content +="</table>";
            snippetTag[i].innerHTML = content;
        }
    } 
}

/*
    加载页面时执行的方法
*/

(function() {
    // 设置导航条
    var nav = "<div style='width:1200px;margin:0px auto;'>";
    var headerNav = document.getElementById("header-nav");
    if( headerNav ) {
        for(var n=0; n<G_navData.length; n++) {
            nav += "<span style='"+styles.navline+"' >"+
                        "<a href='javascirpt:void(0);' style='color:#9dccb6;' data-type='"+G_navData[n].navType+"' onclick='selectSourceType(this)'>"+G_navData[n].text+"</a>"+
                "</span>";
        }
        headerNav.innerHTML = nav+"</div>";
    }

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

})()

// 选择导航内容
function selectSourceType(obj){
    var showContent = "<div>",
        sourceType = (typeof obj == "string") ? window.localStorage.getItem("navtype"):obj.getAttribute("data-type"),
        sourceData = G_contentSource[sourceType],
        fenYeDiv = document.getElementById("content-modle-fenye"),
        dataLength = 0,
        contentModle = document.getElementById("content-modle-showcontent");
    if( sourceType ) {
        // 设置主区内容分页
        var span = document.getElementById("header-nav").getElementsByTagName("span"),
            defaultSpan;
        for(var i=0; i< span.length; i++){
            span[i].style.background = "#005f3c";
            if( sourceType ==  span[i].getElementsByTagName("a")[0].getAttribute("data-type")) {
                defaultSpan = span[i]
            }
        }
        if(obj.parentNode){
            obj.parentNode.style.background = "#048857";
        }else{
            defaultSpan.style.background = "#048857";
        } 
        if(sourceData.length < G_PAGECOUNT+1) {
            fenYeDiv.innerHTML = "<span id='pageCount'>共1页</span>"+
                            "<span id='beforePage' class='beforepage-false'><<</span>"+
                            "<span id='nowPage' style='color:blue;'>1</span>"+
                            "<span id='nextPage' class='nextpage-false'>>></span>";
            dataLength = sourceData.length;
        } else if( sourceData.length > G_PAGECOUNT ) {
            fenYeDiv.innerHTML = "<span id='pageCount'>共"+Math.ceil(sourceData.length/G_PAGECOUNT)+"页</span>"+
                            "<span id='beforePage' class='beforepage-false' onclick=\"fenye( '"+sourceType+"', 'pre')\"><<</span>"+
                            "<span id='nowPage' style='color:blue;' data-nowPage='1'>1</span>"+
                            "<span id='nextPage'  class='nextpage-true' onclick=\"fenye( '"+sourceType+"', 'next')\">>></span>";
            dataLength = G_PAGECOUNT;
        }
        // 设置主区内容显示
        if( sourceType == "webaddress") {
            var contentaside = document.getElementById("content-modle-showcontent"),
                showAside = "", linedata, line;
            if( contentaside ) {
                for(var i=0; i<G_webSource.length; i++) {
                    showAside += "<div style='"+styles.webfont.wrapper+"'><div style='"+styles.webfont.title+"'>"+G_webSource[i].title+"</div>";
                    for(var j=0; j<G_webSource[i].content.length; j++){
                        linedata = G_webSource[i].content[j];
                        showAside += "<div style='"+styles.webfont.type+"'><span>"+linedata.type+"</span>";
                        for(var k=0; k<linedata.webfont.length; k++) {
                            line = linedata.webfont[k];
                            showAside += "<span style='"+styles.webfont.webfont+"'><a href='"+line.url+"' title='"+line.discrible+"' target='_blank'>"+line.name+"</a></span>";
                        }
                        showAside +="</div>"
                    }
                    showAside += "</div>";
                }
                contentaside.innerHTML = showAside;
            }
        }else{
            for(var i=0; i<dataLength; i++) {
                showContent += "<p class='"+sourceData[i].titleClass+"'>"+sourceData[i].title+" <span style='color:#005f3c;background:#cef1e0;font-size:10px;padding:2px;font-weight:300;'>"+sourceData[i].type+"</span> </p>"+
                            "<p class='"+sourceData[i].contentClass+"'>"+sourceData[i].discription+
                                    " <a href='"+sourceData[i].linkPath+"' class='"+sourceData[i].aStyle+"' target='_blank'>more>></a>"+
                                "</p>";
            }
            showContent += "</div>";
            contentModle.innerHTML = showContent;
        }
        window.localStorage.setItem("navtype", sourceType)
    }
}

// data 数据源 ， page 当前页面， dict 切换方向
function fenye( sourcetype, dict){
    var nowPage = document.getElementById("nowPage"),
        page = parseInt(nowPage.getAttribute("data-nowPage")),
        contentModle = document.getElementById("content-modle-showcontent"),
        beforePage = document.getElementById("beforePage"),
        nextPage = document.getElementById("nextPage"),
        data = G_contentSource[sourcetype],
        showContent = "<div>",
        starNum = 0, endNum = data.length;
    if( nowPage ) {
        if( dict == "pre") {
            if(page > 1 ) {
                page = page - 1;
                nowPage.innerHTML = page;
                nowPage.setAttribute("data-nowPage",page);
            }
        }else if( dict == "next") {
            if(page < Math.ceil(data.length/G_PAGECOUNT) ) {
                page = page + 1;
                nowPage.innerHTML = page;
                nowPage.setAttribute("data-nowPage",page);
            }
        }
        starNum = (page-1)*G_PAGECOUNT;
        endNum = (data.length-starNum > G_PAGECOUNT) ? (starNum+G_PAGECOUNT):  data.length;
        for(var i= starNum; i< endNum; i++) {
            showContent += "<p class='"+data[i].titleClass+"'><i style='color:#9dccb6;font-size:14px;'>["+data[i].type+"]</i>. "+data[i].title+"</p>"+
                        "<p class='"+data[i].contentClass+"'>"+data[i].discription+
                                "... <a href='"+data[i].linkPath+"' class='"+data[i].aStyle+"'>更多>></a>"+
                            "</p>";
        }
        showContent += "</div>";
        contentModle.innerHTML = showContent;
    }
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
    if( snippetTag ) {
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
    

    // load代码片段
    var snippetContent = document.getElementsByClassName("snippet-content");
    if(snippetContent){
        var text="",dictText = "";
        for(var i=0; i< snippetContent.length; i++) {
            text = snippetContent[i].innerText;
            if( text.indexOf("var") >　-1) {
                dictText = text.substr(text.indexOf("var"),3)
                snippetContent[i].innerHTML = text.replace(dictText, "<span style='color:#a0d2ec;'>var</span>");
            }

            if( text.indexOf("function") >　-1) {
                dictText = text.substr(text.indexOf("function"),8)
                snippetContent[i].innerHTML = text.replace(dictText, "<span style='color:#a0d2ec;'>function</span>");
            }

            if( text.indexOf("return") >　-1) {
                dictText = text.substr(text.indexOf("return"),6)
                snippetContent[i].innerHTML = text.replace(dictText, "<span style='color:#db73e2;'>return</span>");
            }
        }
    }
}

// 设置公共对象样式
const styles = {
    navline: "float:left;width:90px;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
}

// 设置公共的数据源 , 所用名称前加上大写G_
// 导航条数据
const G_navData = [
    { linkPath: "" , navType: "html", text:"html" },
    { linkPath: "" , navType: "CSS", text:"CSS3" },
    { linkPath: "" , navType: "JavaScript", text:"javaScript" },
    { linkPath: "" , navType: "echarts", text:"echarts" },
    { linkPath: "" , navType: "react", text:"react" },
    { linkPath: "" , navType: "IFT", text:"百度IFE任务" }
];

// 设置导航条
( function() {
    var nav = "<div style='width:1000px;margin:0px auto;'>";
    var headerNav = document.getElementById("header-nav");
    for(var n=0; n<G_navData.length; n++) {
        nav += "<p style='"+styles.navline+"' data-type='"+G_navData[n].navType+"'>"+
                    "<a href='"+G_navData[n].linkPath+"'>"+G_navData[n].text+"</a>"+
               "</p>";
    }
    headerNav.innerHTML = nav+"</div>";
})()

// 设置IFE 任务显示图片
( function() {
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

// load代码片段
( function() {
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

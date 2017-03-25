/*
    加载页面时执行的方法
*/

(function() {
    // 设置导航条
    var nav = "<div style='width:1000px;margin:0px auto;'>";
    var headerNav = document.getElementById("header-nav");
    if( headerNav ) {
        for(var n=0; n<G_navData.length; n++) {
            nav += "<p style='"+styles.navline+"' >"+
                        "<a href='javascirpt:void(0);' data-type='"+G_navData[n].navType+"' onclick='selectSourceType(this)'>"+G_navData[n].text+"</a>"+
                "</p>";
        }
        headerNav.innerHTML = nav+"</div>";
    }

    // content-right 内容添加
    var contentaside = document.getElementById("content-right"),
        showAside = "", linedata, line;
    if( contentaside ) {
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
    }

    // 滚动条样式
    /**
     * 滑动条对象构造函数，
     * 内含其他功能性函数，利用函数作用域链的原理，防止自己随意调用
     * 兼容：firefox、opera、chrome
     * ie没试，然而显然不兼容旧版本ie（8及之前），因为旧版本ie添加事件监听函数的方法不同。如若要兼容ie，还需要添加其他函数
     * js生成的滑动条类名为slider_bar、滑动块类型为slider_block，可用css样式自己设置大小、颜色等。
     * 滑动条左右padding未限制滑动条界限，如若需要限制，须在计算部分进行细小修改，加算padding，此处略去。
     *
     * @param {DOMElement} slider_content 被滚动的元素（不是被滚动元素的父元素）
     */
    function Slider(slider_content){
      //slider_instance为对象本身（在事件处理函数中会进行访问，而事件处理函数中的this对象已被注入为event.currentTarget，因此预先存储）
      var slider_instance=this;
      //this.slider_content为被滚动的元素
      this.slider_content=slider_content;
      //this.outer为被滚动元素的父元素
      this.outer=slider_content.parentNode;
      //创建滑动条
      this.slider_bar=createSliderBar();
      //创建滑动条块
      this.slider_block=createSliderBlock();
      //拼装
      this.slider_bar.appendChild(this.slider_block);
      this.outer.appendChild(this.slider_bar);
      //被滚动元素可被滚动的总宽度
      this.slider_content_width=this.slider_content.offsetWidth-this.outer.clientWidth;
      //滑动条块可滑动的总宽度
      this.slider_bar_width=this.slider_bar.clientWidth-this.slider_block.offsetWidth;
      //被滚动元素的左边距（相对父元素）
      this.slider_content_left=0;
      //滚动块的左边距（相对父元素）
      this.slider_block_left=0;
      //滑动条的左边距（相对视口）
      this.slider_bar_pageLeft=getPageLeft(this.slider_bar);
      //滑动条块添加鼠标压键事件
      this.slider_block.addEventListener("mousedown",mousedownHandler,false);
      //离开父元素后取消鼠标移动事件
      this.outer.addEventListener("mouseleave",mouseupHandler,false);
      //鼠标弹键时取消鼠标移动事件
      this.outer.addEventListener("mouseup",mouseupHandler,false);
      /**
       * 创建滑动条
       */
      function createSliderBar(){
        var slider_bar=document.createElement("div");
        slider_bar.className="slider_bar";
        return slider_bar;
      }
      /**
       * 创建滑动条块
       */
      function createSliderBlock(){
        var slider_block=document.createElement("div");
        slider_block.className="slider_block";
        return slider_block
      }
      /**
       * 鼠标按下事件处理
       */
      function mousedownHandler(event){
        //计算鼠标相对滑动块的左边距，进而在鼠标移动事件处理函数中使用
        //鼠标相对滑动块左边距=鼠标相对视口左边距-滑动块相对视口左边距
        slider_instance.mouseLeft=event.clientX-getPageLeft(this);
        console.log(getPageLeft(this));
        slider_instance.outer.addEventListener("mousemove",mousemoveHandler,false);
      }
      /**
       * 鼠标移动事件处理
       */
      function mousemoveHandler(event){
        //计算出应当设置的滑动块左边距（相对于父容器）
        //滑动块相对于滑动条左边距=鼠标相对于视口左边距-滑动条相对于视口左边距-鼠标相对于滑动块左边距
        var blockLeft=event.clientX-slider_instance.slider_bar_pageLeft-slider_instance.mouseLeft;
        //如若滑动块相对于父容器左边距大于滑动块可移动宽度或小于0，表示过界；设置为左右界限值
        if(blockLeft>slider_instance.slider_bar_width){
          blockLeft=slider_instance.slider_bar_width
        }else if(blockLeft<0){
          blockLeft=0;
        }
        //设置滑动块的新位置
        slider_instance.slider_block.style.left=blockLeft+"px";
        //按照滚动块已滚动的百分比，设置被滚动元素的marginLeft（负值），进而让其滚动起来
        //被滚动元素的左margin=-(滑动块相对于滑动条左边距/可滑动最大宽度*可滚动元素的最大宽度)
        slider_instance.slider_content.style.marginLeft="-"+(blockLeft/slider_instance.slider_bar_width*slider_instance.slider_content_width)+"px";
      }
      /**
       * 鼠标键弹起事件处理
       */
      function mouseupHandler(event){
        slider_instance.outer.removeEventListener("mousemove",mousemoveHandler,false);
      }
      /**
       * 获得元素的视口左边距
       */
      function getPageLeft(el){
        var result=el.offsetLeft;
        var parent=el.offsetParent;
        while(parent!==null){
          result+=parent.offsetLeft;
          parent=parent.offsetParent;
        }
        return result;
      }
    }
    //用test_div元素进行展示
    new Slider(document.getElementById("content-right"));



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
        if(sourceData.length < G_PAGECOUNT+1) {
            fenYeDiv.innerHTML = "<span id='pageCount'>共1页</span>"+
                            "<span id='beforePage' class='beforepage-false'>上一页</span>"+
                            "<span id='nowPage' style='color:blue;'>第1页</span>"+
                            "<span id='nextPage' class='nextpage-false'>下一页</span>";
            dataLength = sourceData.length;
        } else if( sourceData.length > G_PAGECOUNT ) {
            fenYeDiv.innerHTML = "<span id='pageCount'>共"+Math.ceil(sourceData.length/G_PAGECOUNT)+"页</span>"+
                            "<span id='beforePage' class='beforepage-ture' onclick=\"fenye( '"+sourceType+"', 'pre')\">上一页</span>"+
                            "<span id='nowPage' style='color:blue;' data-nowPage='1'>第1页</span>"+
                            "<span id='nextPage'  class='nextpage-true' onclick=\"fenye( '"+sourceType+"', 'next')\">下一页</span>";
            dataLength = G_PAGECOUNT;
        }
        // 设置主区内容显示
        for(var i=0; i<dataLength; i++) {
            showContent += "<p class='"+sourceData[i].titleClass+"'><i style='color:#9dccb6;font-size:14px;'>["+sourceData[i].type+"]</i>. "+sourceData[i].title+"</p>"+
                        "<p class='"+sourceData[i].contentClass+"'>"+sourceData[i].discription+
                                " <a href='"+sourceData[i].linkPath+"' class='"+sourceData[i].aStyle+"'>更多>></a>"+
                            "</p>";
        }
        showContent += "</div>";
        contentModle.innerHTML = showContent;
        window.localStorage.setItem("navtype", sourceType)
    }
}

// data 数据源 ， page 当前页面， dict 切换方向
function fenye( sourcetype, dict){
    var nowPage = document.getElementById("nowPage"),
        page = parseInt(nowPage.getAttribute("data-nowPage")),
        contentModle = document.getElementById("content-modle-showcontent"),
        data = G_contentSource[sourcetype],
        showContent = "<div>",
        starNum = 0, endNum = data.length;
    if( nowPage ) {
        if( dict == "pre") {
            if(page > 1 ) {
                page = page - 1;
                nowPage.innerHTML = "第"+page+"页";
                nowPage.setAttribute("data-nowPage",page);
            }
        }else if( dict == "next") {
            if(page < Math.ceil(data.length/G_PAGECOUNT) ) {
                page = page + 1;
                nowPage.innerHTML = "第"+page+"页";
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

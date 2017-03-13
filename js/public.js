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

    // 代码片段
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

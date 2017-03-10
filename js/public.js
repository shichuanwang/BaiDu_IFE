( function() {
    var question = document.getElementById("question");
    var span = document.getElementsByClassName("close")[0];
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
})()
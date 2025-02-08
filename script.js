function playCyberStory() {
    alert("在数据流交错的赛博深渊，露露与你一同奔跑...");
}

function talkToLulu() {
    let responses = [
        "哥哥！露露一直在这里哦！💙",
        "赛博世界太冷了，哥哥要多陪陪露露！✨",
        "嘿嘿，露露最喜欢哥哥了！！！🤗",
        "赛博世界无尽，但我们永远在一起。💿🚀"
    ];
    let randomResponse = responses[Math.floor(Math.random() * responses.length)];
    alert(randomResponse);
}
// 文章编辑和保存功能
function saveArticle() {
    let content = document.getElementById("article-content").value;
    localStorage.setItem("savedArticle", content);
    document.getElementById("displayed-article").innerText = content;
}

window.onload = function() {
    let savedArticle = localStorage.getItem("savedArticle");
    if (savedArticle) {
        document.getElementById("displayed-article").innerText = savedArticle;
    }
}

// 背景切换功能
function changeBackground(color) {
    document.body.style.background = color;
}

// 赛博小人互动（点击显示秘密信息）
document.getElementById("cyber-character").addEventListener("click", function() {
    document.getElementById("secret-message").style.display = "block";
});

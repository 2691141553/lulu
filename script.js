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
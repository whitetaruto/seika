const startBtn = document.getElementById('diceBtn');
const body = document.querySelector('body');//bodyを指定する理由
const dice = document.createElement('img');
dice.style.width = '100px';
dice.style.height = '100px';

let diceNum = './img/saikoro1.png';
dice.setAttribute('src', diceNum);//ここの意味があやふや
body.appendChild(dice);//ここの意味があやふや

let timer;

startBtn.addEventListener('click', function () {
    clearInterval(timer);//先にタイマーをクリアする理由。
    timer = setInterval('random()', 100);

    setTimeout(() => {
        clearInterval(timer);
    }, 3000);
});

const random = function () {
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;//(max-min)が6になるのはなぜ？6-1=5では？
    dice.setAttribute('src', diceNum);
};
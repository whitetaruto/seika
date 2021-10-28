
let timer;
let sec = 0;//説明　役割がわからない
let leftHour;
let leftMin;
let leftSec;

const nowTime = document.getElementById('nowTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');

setTime.addEventListener('click', function () {
    sec = document.getElementById('inputTime').value;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：セット完了です`;
});

//スタートボタンを押した時の挙動を表示
startTimer.addEventListener('click', function () {
    clearInterval(timer);//説明　クリアする必要はあるのか
    timer = setInterval('countDown()', 1000);
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
});
//スタートボタンのところは表示するだけで実際の秒数のカウントはこちらで実行しループさせている

const countDown = function () {
    sec -= 1;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
    console.log(sec);
    if (sec === 0) {
        alert('終了');
        clearInterval(timer);
    }
};

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒でストップしました`;
});

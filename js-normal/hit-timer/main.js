let timer = 0;//タイマーを設定
let sec = 0;//●秒を表示するために設定

const confirmTime = document.getElementById('confirmTime');//confirmTimeを設定
const startTimer = document.getElementById('startTimer');//startTimerを設定

confirmTime.addEventListener('click', function () {//confirmTimeがクリックされたらファンクション内動作する
    if (sec === 20) {//20sだと
        alert('大正解^-^');//正解アラート出現
    } else if (sec < 20) {//20s以下
        alert(`まだ${sec}秒、、、再スタートだ`);//再スタートアラーム
    } else {//それ以外
        alert(`もう${sec}秒だ！再挑戦せよ`);//再スタートアラーム
    }
    clearInterval(timer);//タイマーをリセットし
    sec = 0;//経過時間も０にする
});

startTimer.addEventListener('click', function () {//startTimerがクリックされたら
    clearInterval(timer);//タイマーをクリアする
    timer = setInterval('countUp()', 1000);//タイマーは１秒カウントしていく

});

const countUp = function () {//カウントアップの内容
    sec += 1;//１づつ増える
    if (sec === 40) {//４０s経った時の条件
        clearInterval(timer);//タイマーをクリアし
        alert('終了/また挑戦しろ');//アラームを出す
        sec = 0;//０秒に戻す
    }
};


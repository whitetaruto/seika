// フロー
// 初期値表示　左０真ん中０右０
// スタート押すとルーレットスタート
// 左ボタン押すとカウントストップ
// 真ん中ボタンを押すとカウントストップ
// 右ボタン押すとカウントストップ
// ゾロ目　アラーム　成功
// 揃わない　アラーム　失敗

// 左の上リール
var leftUp = document.getElementById('nowTime4');
leftUp.textContent = 9;//初期表示
// 左の中リール
var left = document.getElementById('nowTime');
left.textContent = 0;//初期表示
// 左の下リール
var leftDown = document.getElementById('nowTime7');
leftDown.textContent = 1;//初期表示

// 真ん中の上のリール
var centerUp = document.getElementById('nowTime5');
centerUp.textContent = 9;//初期表示
// 真ん中の中リール
var center = document.getElementById('nowTime2');
center.textContent = 0;//初期表示
// 真ん中の下リール
var centerDown = document.getElementById('nowTime8');
centerDown.textContent = 1;//初期表示

// 右の上リール
var rightUp = document.getElementById('nowTime6');
rightUp.textContent = 9;//初期表示
// 右の中リール
var right = document.getElementById('nowTime3');
right.textContent = 0;//初期表示
// 右の下リール
var rightDown = document.getElementById('nowTime9');
rightDown.textContent = 1;//初期表示

var leftRandomUp = null;
var leftRandom = null;
var leftRandomDown = null;

var centerRandomUp = null;
var centerRandom = null;
var centerRandomDown = null;

var rightRandomUp = null;
var rightRandom = null;
var rightRandomDown = null;



// スタートボタンを押した時の制御
const startBtn = document.getElementById('startTimer');
startBtn.addEventListener('click', function () {

    //left上のリールの数字をクリアする
    if (leftRandomUp) {
        clearInterval(leftRandomUp);
    }
    //left上リール数字にランダム数字を生成する
    leftUp.textContent = Math.floor(Math.random() * 10);
    leftRandomUp = setInterval(function () {//
        leftUp.textContent = (+leftUp.textContent + 1) % 10;
    }, 100);


    //left中のリールの数字をクリアする
    if (leftRandom) {
        clearInterval(leftRandom);
    }
    //left中リール数字にランダム数字を生成する
    left.textContent = Math.floor(Math.random() * 10);
    leftRandom = setInterval(function () {//
        left.textContent = (+left.textContent + 1) % 10;
    }, 100);

    //left下のリールの数字をクリアする
    if (leftRandomDown) {
        clearInterval(leftRandomDown);
    }
    //left下リール数字にランダム数字を生成する
    leftDown.textContent = Math.floor(Math.random() * 10);
    leftRandomDown = setInterval(function () {//
        leftDown.textContent = (+leftDown.textContent + 1) % 10;
    }, 100);



    //center上のリールの数字をクリアする
    if (centerRandomUp) {
        clearInterval(centerRandomUp);
    }
    //center上リール数字にランダム数字を生成する
    centerUp.textContent = Math.floor(Math.random() * 10);
    centerRandomUp = setInterval(function () {//
        centerUp.textContent = (+centerUp.textContent + 1) % 10;
    }, 100);

    //centerのリールの数字をクリアする
    if (centerRandom) {
        clearInterval(centerRandom);
    }
    center.textContent = Math.floor(Math.random() * 10);
    centerRandom = setInterval(function () {
        center.textContent = (+center.textContent + 1) % 10;
    }, 100);

    //center下のリールの数字をクリアする
    if (centerRandomDown) {
        clearInterval(centerRandomDown);
    }
    //center下リール数字にランダム数字を生成する
    centerDown.textContent = Math.floor(Math.random() * 10);
    centerRandomDown = setInterval(function () {//
        centerDown.textContent = (+centerDown.textContent + 1) % 10;
    }, 100);


    //right上のリールの数字をクリアする
    if (rightRandomUp) {
        clearInterval(rightRandomUp);
    }
    //center上リール数字にランダム数字を生成する
    rightUp.textContent = Math.floor(Math.random() * 10);
    rightRandomUp = setInterval(function () {//
        rightUp.textContent = (+rightUp.textContent + 1) % 10;
    }, 100);


    //rightのリールの数字をクリアする
    if (rightRandom) {
        clearInterval(rightRandom);
    }
    right.textContent = Math.floor(Math.random() * 10);
    rightRandom = setInterval(function () {
        right.textContent = (+right.textContent + 1) % 10;
    }, 100);

    //right下のリールの数字をクリアする
    if (rightRandomDown) {
        clearInterval(rightRandomDown);
    }
    //center下リール数字にランダム数字を生成する
    rightDown.textContent = Math.floor(Math.random() * 10);
    rightRandomDown = setInterval(function () {//
        rightDown.textContent = (+rightDown.textContent + 1) % 10;
    }, 100);
});



//leftstopボタンの制御
const stopBtn1 = document.getElementById('setTime1');
stopBtn1.addEventListener('click', function () {

    if (leftRandomUp) {
        clearInterval(leftRandomUp);//stop指示
        leftRandomUp = null;
    }

    if (leftRandom) {
        clearInterval(leftRandom);//stop指示
        leftRandom = null;
    }
    check();

    if (leftRandomDown) {
        clearInterval(leftRandomDown);//stop指示
        leftRandomDown = null;
    }

});


//centerstopボタンの制御
const stopBtn2 = document.getElementById('setTime2');
stopBtn2.addEventListener('click', function () {
    if (centerRandomUp) {
        clearInterval(centerRandomUp);
        centerRandomUp = null;
    }
    if (centerRandom) {
        clearInterval(centerRandom);
        centerRandom = null;
    }
    check();

    if (centerRandomDown) {
        clearInterval(centerRandomDown);
        centerRandomDown = null;
    }
});



//rightstopボタンの制御
const stopBtn3 = document.getElementById('setTime3');
stopBtn3.addEventListener('click', function () {
    if (rightRandomUp) {
        clearInterval(rightRandomUp);
        rightRandomUp = null;
    }

    if (rightRandom) {
        clearInterval(rightRandom);
        rightRandom = null;
    }
    check();

    if (rightRandomDown) {
        clearInterval(rightRandomDown);
        rightRandomDown = null;//rightRandomの値から一個前の数値を取得して表示したい
    }
});

function check() {
    if (!leftRandom && !centerRandom && !rightRandom) {
        if (left.textContent === center.textContent && left.textContent === right.textContent) {
            alert('あたり！');
        } else {
            alert('はずれ！');
        }
    }
};



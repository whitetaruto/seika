//  let i = 0;

//  const rewriteNum = document.getElementById('rewriteNum')
//  rewriteNum.innerHTML = i;

//  const rewriteCntUp = function () {
//    i = i + 1;
//
//    if (i % 3 === 0 && i % 5 === 0) {//3で割って余り０かつ5で割って余り０
//        rewriteNum.innerHTML = 'fizzbuzz';//fizzbuzzで表示する
//    } else if (i % 3 === 0) {        //3で割ってあまりが０
//        rewriteNum.innerHTML = 'fizz';  //fizzで表示する
//    } else if (i % 5 === 0) { //5で割ってあまりが０
//        rewriteNum.innerHTML = 'buzz';  //buzzで表示する
//    } else {
//        rewriteNum.innerHTML = i;//上記以外は数字のまま出力する
//    }
//  };

let i = 0;
const showNum = document.getElementById('showNum');
showNum.innerHTML = i;

const fizzBtn = function () {
    i += 1;
    if (i % 3 === 0) {
        showNum.innerHTML = 'fizz';
    } else {
        alert('ぶっぶーですわ');
        location.reload();　//＊＊＊これ以外の方法はないのか。０を代入したが戻らなかった
        //cntPerson = 0;
    }
};

const buzzBtn = function () {
    i += 1;
    if (i % 5 === 0) {
        showNum.innerHTML = 'buzz';
    } else {
        alert('ぶっぶーですわ');
        location.reload();
    }
};

const fizzbuzzBtn = function () {
    i += 1;
    if ((i % 3 === 0) & (i % 5 === 0)) {
        showNum.innerHTML = 'fizzbuzz';
    } else {
        alert('ぶっぶーですわ');
        location.reload();
    }
};

const numBtn = function () {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0) {
        alert('ぶっぶーですわ');
        location.reload();
    }
    showNum.innerHTML = i;
};
const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

setBtn.addEventListener('click', function () {
    showImg.innerHTML = '';//要素の中身をクリアする
    const checkEvo = Math.floor(Math.random() * 10);//乱数0~9
    console.log(checkEvo);//表示確認

    const first = document.createElement('div');//divにfirstと指定する
    first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";//firstに原人を要素に追加
    showImg.appendChild(first);//原人要素をDOMで組み込む
    const firstWord = document.createElement('p');
    firstWord.innerHTML = '原人';
    first.appendChild(firstWord);

    if (checkEvo >= 4) {
        const second = document.createElement('div');//divにsecondと指定する
        second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";//secondに旧人を要素に追加
        showImg.appendChild(second);//旧人要素をDOMで組み込む

        const secondWord = document.createElement('p');
        secondWord.innerHTML = '旧人';
        second.appendChild(secondWord);
    }
    if (checkEvo >= 7) {
        const third = document.createElement('div');//divにthirdと指定する
        third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";//thirdに新人を要素に追加
        showImg.appendChild(third);//新人要素をDOMで組み込む

        const thirdWord = document.createElement('p');
        thirdWord.innerHTML = '新人';
        third.appendChild(thirdWord);
    }
    if (checkEvo >= 9) {
        const fourth = document.createElement('div');//divにfourthと指定する
        fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";//fourthに現代人を要素に追加
        showImg.appendChild(fourth);//現代人要素をDOMで組み込む

        const fourthWord = document.createElement('p');
        fourthWord.innerHTML = '現代人';
        fourth.appendChild(fourthWord);
    }
});

resetBtn.addEventListener('click', function () {
    showImg.innerHTML = '';//num要素の中身をクリアする
});
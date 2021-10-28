const pushBtn = document.getElementById('pushBtn');
const skipBtn = document.getElementById('skipBtn');
const imgSection = document.getElementById('viewImg');

let imgNum = 0;
const data = [
    { img: './img/slide1.png', text: '春へ' },//0
    { img: './img/slide2.png', text: '夏へ' },//1
    { img: './img/slide3.png', text: '秋へ' },//2
    { img: './img/slide4.png', text: '冬へ' },//3
];


pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute('src', data[imgNum].img);

pushBtn.addEventListener('click', function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }

    imgSection.setAttribute('src', data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;
});

skipBtn.addEventListener('click', function () {

    imgNum = document.getElementById('seasonNum').value;
    imgNum = parseInt(imgNum);//整数の方がいいため変更している

    imgSection.setAttribute('src', data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;
});





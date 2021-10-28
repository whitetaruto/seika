// const counter = document.querySelector('.counter');

// function nanNichi() {//後何日？関数

//     const d1 = moment();　//今の日時
//     const d2 = new Date('2112/09/03 00:00'); //ターゲット日時：ドラえもんの誕生日　２１１２年９月３日
//     const d3 = d2 - d1;//差分をとる（ミリ秒）
//     const d3_Sec = Math.floor(d3 / 1000);// ミリ秒から秒に

//     const Minute_Sec = 60;//分の秒数
//     const Hour_Sec = 60 * 60;//時の秒数
//     const Day_Sec = 60 * 60 * 24;//日の秒数

//     const d4_Day = Math.floor(d3_Sec / Day_Sec);//あと何日 
//     const d5_Hour = Math.floor(d3_Sec / Hour_Sec % 24);//あと何時間
//     const d6_Minute = Math.floor(d3_Sec / Minute_Sec % 60);//あと何分
//     const d7_Sec = Math.floor(d3_Sec % 60);//あと何秒

//     //カウントダウン
//     counter.innerHTML = "ドラえもんが生まれるまで、あと　" + d4_Day + "日" + d5_Hour + "時間" + d6_Minute + "分" + d7_Sec + "秒";

//     setTimeout(nanNichi, 1000);//1秒ごとに実行
// }
// nanNichi();//関数処理


//　　　　　＜　　チャレンジ問題　　＞



const date = document.getElementById('dateSearch')
date.addEventListener('click', function () {
    request.getParameter(date);
});
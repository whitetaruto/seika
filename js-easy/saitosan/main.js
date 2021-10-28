
// const setBtn = function () {
//     const v = Math.random() * 10;
//     const name = (v < 5) ? 'ぺっぺぺー' : '斎藤さんだぞ？';
//     alert(name);
// };// **＊＊＊＊   ;が入っても動作する理由と付けるべきか。;の意味とは


const setBtn2 = function () {
    const i = Math.random() * 10;
    if (i < 5) {
        const sai = window.confirm('ぺっぺぺー');
        if (sai) {
            alert('ぺっぺぺー');
        } else {
            alert('斎藤さんだぞ？');
        }
    } else {
        const pepe = window.confirm('斎藤さんだぞ？');
        if (pepe) {
            alert('斎藤さんだぞ？');
        } else {
            alert('ぺっぺぺー');
        }
    }
};
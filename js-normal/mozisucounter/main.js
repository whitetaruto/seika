const input = document.getElementById('sampleForm');
const countNum = document.getElementById('textCounter');
const reset = document.getElementById('resetBtn');
const firstdel = document.getElementById('iniDel');
const enddel = document.getElementById('endDel');
const goalNum = 400;

let textarea;//指定

countNum.textContent = `あと ${goalNum - input.value.length} 文字`;//初期表記

input.addEventListener('keyup', function () {//タイプ後の動作
    countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
    textarea = input.value;//ここでtextareaを指定している。lengthは不要。長さを表す内容のため
});

firstdel.addEventListener('click', function () {
    textarea = textarea.slice(1);//textareaはtextareaの最初の文字を１つ削除したものです
    input.value = textarea;//value削除でAssignment to constant variableエラーなる。つける理由は何か？
    //input=タグのこと　input.valueで１４行目で指定している。 textarea.value=textarea;
    countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
    //value削除で文字数がNaNとなる。⇨valueは値。
    //length削除で文字数がNaNとなる。⇨lengthは長さ(数字と考えれば計算できると思える）を表示
});

enddel.addEventListener('click', function () {
    textarea = textarea.slice(0, -1);//textareaの最後の文字を１つ削除したものです
    input.value = textarea;//こっちにlengthを入れない理由は何か？⇨長さを表す必要はないから
    countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
});

reset.addEventListener('click', function () {
    countNum.textContent = `あと ${goalNum} 文字`;
    textarea = ""
});


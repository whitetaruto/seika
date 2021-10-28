
// フロー
// テキスト入力
// 追加ボタン押すと
//   テキスト内容取得
//   テキスト内容を表示
//   テキスト内容の横に完了ボタン追加
// 削除ボタンの動作内容を表記

//追加ボタンを押すとテキストに文字を残さないようにする
//空欄の場合はアラートで「空です！」と伝え、リストに追加されないように

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function () {


    //テキスト表示、ノード追加
    const listText = document.getElementById('add-area');//テキストを取得
    //console.dir(listText);確認用　文字がどのプロパティに入っているか
    const text = document.createTextNode(listText.value);//テキストノードを作成
    //listText.valueにする理由はテキスト記入　　　　　　　　　　　　　　　　　
    if (listText.value === '') {
        alert('空です');
    } else {

        const li = document.createElement('li');//テキスト追加するliタグ作成
        const list = document.getElementById('todo');//id=todoを参照
        li.appendChild(text);//textタグを追加
        list.appendChild(li);//liタグ追加

        //完了ボタン作成
        const finishBtn = document.createElement('button');//finishボタン設定
        finishBtn.innerText = '完了';//ボタンの中に記載する表示
        li.appendChild(finishBtn);//liタグ(親タグ）に完了ボタン表示

        //完了ボタンクリックした時の挙動
        finishBtn.addEventListener('click', function () {
            let li = finishBtn.parentNode;//親ノードをliとする
            li.remove();//親タグ自体を消す

        });
    }
    listText.value = '';

});


// 模範解答

// const buttonClass = document.getElementsByClassName('add-btn');

// buttonClass[0].addEventListener('click', function () {
//     addElement();
//     delElement();
// });

// const addElement = function () {
//     const listText = document.getElementById('add-area');
//     const text = document.createTextNode(listText.value);

//     // チャレンジ問題

//     if (listText.value === '') {
//         alert('空です！');
//         return;
//     }

//     // チャレンジ問題 ここまで

//     const li = document.createElement('li');
//     li.appendChild(text);

//     // li要素に完了ボタンを追加
//     const trash = document.createElement('button');
//     trash.classList.add('trash');
//     trash.innerHTML = '完了';
//     li.appendChild(trash);

//     const lists = document.getElementById('todo');
//     lists.appendChild(li);

//     // チャレンジ問題
//     listText.value = '';
//     // チャレンジ問題 ここまで
// };

// // todoリスト内の削除ボタン
// const delElement = function () {
//     const trash = document.getElementsByClassName('trash');
//     // クリックしたliタグの配列数を取得
//     for (let i = 0; i < trash.length; i++) {
//         trash[i].addEventListener('click', function () {
//             // thisはtrash[i]にあたる
//             const li = this.parentNode;
//             li.remove();
//         });
//     }
// };
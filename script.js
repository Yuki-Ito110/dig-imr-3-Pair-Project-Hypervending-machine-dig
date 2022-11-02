'use strict'
// 1行目に記載している 'use strict' は削除しないでください

window.addEventListener('load', () => {


const containerEl = document.querySelector('#boughtBox');

function postImg(image) {
    // 投稿全体のdiv作成
    const postEl = document.createElement('div');
    postEl.className = 'drink';
    
    // 画像のimage作成
    const imageEl = document.createElement('img');
    imageEl.className = "drinks"
    imageEl.src = image;

    // image要素を追加
    postEl.append(imageEl);
    
    containerEl.append(postEl);
    }

let postb = document.getElementById('postb');
postb.addEventListener('click', function() {
    
    console.log('postがクリックされました！');
    postImg("./images/コーラ.jpg");


},false);

});
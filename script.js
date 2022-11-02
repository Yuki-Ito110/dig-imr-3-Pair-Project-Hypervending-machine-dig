'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// const axios = require('axios');



async function getPokemon () {
    const num = Math.floor(Math.random()*29);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
                                .catch(() => console.log("取得失敗！！！"));
    return response.data.sprites.other["official-artwork"].front_default;
}

window.addEventListener('load', () => {
    const containerEl = document.querySelector('#boughtBox');
    function postImg(image) {

        // 投稿全体のdiv作成
        const postEl = document.createElement('div');
        postEl.className = 'drink';
        
        // 画像のimage作成
        const imageEl = document.createElement('img');
        imageEl.className = "drinks";
        imageEl.src = image;

        // image要素を追加
        postEl.append(imageEl);
        
        containerEl.append(postEl);
    }


    let postb = document.getElementById('postb');
    postb.addEventListener('click', function() {

        getPokemon().then((url) => postImg(url));
        
        console.log('postがクリックされました！');
        // postImg("./images/コーラ.jpg");


    },false);

});

// for test co-commit
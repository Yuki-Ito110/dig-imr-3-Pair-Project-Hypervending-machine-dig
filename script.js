'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// const axios = require('axios');



async function getPokemon () {
    const num = Math.floor(Math.random()*77) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
                                .catch(() => console.log("取得失敗！！！"));
    return response.data.sprites.other["official-artwork"].front_default;
}

window.addEventListener('load', () => {
    function postImg(toAppendId, imageURL, imgClassName) {
        const containerEl = document.querySelector(toAppendId);

        // 投稿全体のdiv作成
        const postEl = document.createElement('div');
        postEl.className = 'drink';
        
        // 画像のimage作成
        const imageEl = document.createElement('img');
        imageEl.className = imgClassName;
        imageEl.src = imageURL;

        // image要素を追加
        postEl.append(imageEl);
        
        containerEl.append(postEl);
    }

    let btnA = document.getElementById('btnA');
    let flagA = true; //取り出し口が空の時true
    console.log(btnA);
    let my_audio = new Audio("./sounds/vending_sound.mp3");
    btnA.addEventListener('click', function() {
        if(flagA) {
            postImg("#vending_machine_div", "images/黒缶.png", "questionImgA");
            flagA = false                
            my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
            my_audio.play();  //サウンドを再生
        }
        console.log('btnAがクリックされました！');
    },false);

    // let btnAout = document.getElementsByClassName("questionImgA");
    // console.log(btnAout[0]);
    // btnAout[0].addEventListener('click', function() {
    //     $(".questionImgA").remove();
    //     flagA = true;
    // },false)



    let btnB = document.getElementById('btnB');
    btnB.addEventListener('click', function() {
        getPokemon().then((url) => postImg('#boughtBox', url, "drinks"));
        console.log('btnBがクリックされました！');
    },false);

});

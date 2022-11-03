'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// const axios = require('axios');

let drinkArr = ["./images/コーラ.png", 
            "./images/コカレロ.png",
            "./images/さいだ.png",
            "./images/チューハイグレープ.png",
            "./images/テキーラ.png",
            "./images/トマト.png",
            "./images/ピンドン.png",
            "./images/マウンテンデュー.png",
            "./images/モエシャン白.png",
            "./images/モンスター.png",
            "./images/レッドブル.png",
            "./images/缶ビール.png",
            ]

async function getPokemon () {
    const num = Math.floor(Math.random()*77) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
                                .catch(() => console.log("取得失敗！！！"));
    return response.data.sprites.other["official-artwork"].front_default;
}

let pid = 1;//
window.addEventListener('load', () => {
    function postImg(toAppendId, imageURL, imgClassName, divId) {
        const containerEl = document.querySelector(toAppendId);

        // 投稿全体のdiv作成
        const postEl = document.createElement('div');
        if(divId !== undefined) {
            postEl.id = divId;
        }
        postEl.className = 'drink';

        const id = "p" + pid;//    
        postEl.classList.add(id);//        

        // 画像のimage作成
        const imageEl = document.createElement('img');
        imageEl.className = imgClassName;
        imageEl.src = imageURL;

        // image要素を追加
        postEl.append(imageEl);
        
        containerEl.append(postEl);
        postEl.addEventListener("dragstart", (e) =>{
            console.log("dragstart");
            e.dataTransfer.setData("choicePokemon", id);
        });
        pid++;
    }
    
    // ゴミ箱DOM
    const dust = document.getElementById("dust");
    dust.addEventListener("dragover", (e) =>{
        e.preventDefault();
        console.log("dragover");
        e.dataTransfer.dropEffect = "copy";
    });
    dust.addEventListener("drop", (e) => {
        e.preventDefault();
        let p = e.dataTransfer.getData("choicePokemon");
        console.log(p);
        document.querySelectorAll("." + p)[0].remove();
    });

    // ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊赤い自販機のボタンが押された時＊＊＊＊＊＊＊＊＊＊＊＊＊＊
    let btnA = document.getElementById('btnA');
    let flagA = true; //取り出し口が空の時true
    let my_audio = new Audio("./sounds/ゴミ捨て.mp3");
    btnA.addEventListener('click', function() {
        if(flagA) {
            postImg("#vending_machine_div", "images/黒缶.png", "questionImgA", "questionDivA");
            flagA = false                
            my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
            my_audio.play();  //サウンドを再生
        }
    },false);

    let n = 0;
    document.getElementById('outDivA').addEventListener('click', function() {
        if(!flagA) {
            document.getElementById("questionDivA").remove();
            document.getElementById("popupImg").src = drinkArr[n];
            document.getElementById('popup').classList.toggle('is-show');
            postImg('#boughtBox', drinkArr[n], "drinks")
            n < drinkArr.length - 1 ? n++ : n = 0;
            flagA = true;
        }
    },false)

    document.getElementById('close-btn').addEventListener('click', function(){
        document.getElementById('popup').classList.toggle('is-show');
        console.log("This is close btn");
    });

 // ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊青い自販機のボタンが押された時＊＊＊＊＊＊＊＊＊＊＊＊＊＊
    let flagB = true; //取り出し口が空の時true
    document.getElementById('btnB').addEventListener('click', function() {
        if(flagB) {
            postImg("#vending_machine_div", "images/モンスターボール.png", "questionImgB", "questionDivB");
            flagB = false                
            my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
            my_audio.play();  //サウンドを再生
            getPokemon().then(url => document.getElementById("popupImg").src = url);
        }
    },false);

    document.getElementById('outDivB').addEventListener('click', function() {
        if(!flagB) {
            document.getElementById("questionDivB").remove();
            document.getElementById('popup').classList.toggle('is-show');
            postImg('#boughtBox', document.getElementById("popupImg").src, "pokemons")
            flagB = true;
        }
    },false)    
});

// ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊ポップアップのセッティング処理(消す処理)＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// function popupSetting(){
//     let popup = document.getElementById('popup');
//     if(!popup) return;

//     let bgBlack = document.getElementById('bg-black');
//     let closeBtn = document.getElementById('close-btn');

//     // ポップアップ
//     popUp(bgBlack);
//     popUp(closeBtn);

//     // ポップアップ処理
//     function popUp(elem){
//         if(!elem) return;
        
//         elem.addEventListener('click', function(){
//                 popup.classList.toggle('is-show');
//         });
//     }
// }
// // ポップアップのセッティング
// popupSetting();

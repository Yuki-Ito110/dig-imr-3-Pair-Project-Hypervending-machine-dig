class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n){
      // Your code here.
      return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200")
      .then(res => res.json())
      .then(json => {
        const tempArray =[];
        //const resultArray = [];
        for (let i = 0; i < n; i++){
          tempArray.push(json.results[i]);
        }
        //tempArray.map(pokemon => resultArray.push(pokemon["name"]));
        const resultArray = tempArray.map(pokemon => pokemon["name"]);
        return resultArray;
      })
    }
    
    // This should return an array of all the Pokemon that are under a particular weight.
    // findUnderWeight(weight) {
    //   // awaitを使用できるようにasyncで囲む
    //   return (async (w) => {
    //     //処理結果が返ってくるまで待機
    //     const pokemons = await this.findNames(10); //findNamesでfetchを呼び出している
    //     const tempArray = [];
    //     //findNamesの処理結果でループ
    //     for(const key in pokemons){
    //       // urlを作る
    //       const url = "https://pokeapi.co/api/v2/pokemon/" + pokemons[key] +"/";
    //       //WEB APIをコールし結果を保存
    //       const p = await fetch(url).then(res => res.json());
    //       //配列に追加
    //       tempArray.push(p);
    //     }
    //     //返却時にfilterで重さが引数の数値以下なら通過させる
    //     return tempArray.filter(v => v.weight < w);
    //   })(weight)
    //   .catch(err => console.log(err));
    // }
      
  }
  
  window.Pokemonager = Pokemonager;
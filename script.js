let cardQuantity; // quantidade de cartas selecionados
let allowed = [4, 6, 8, 10, 12, 14]; // nº de cartas permitidos
let gameCards = [];
let cards = ["./img/american.png","./img/basque.png","./img/boliche.png","./img/fute.png","./img/sinuca.png","./img/tenis.png","./img/volei.png",   ]

window.onload = checkQuantity();

function checkQuantity() {
  cardQuantity = Number(prompt("Com quantas cartas quer jogar ?"));

  // Verificar qantidade de cartas inseridas 
    // 1- comparar se nº inserido esta na lista (allowed) ===ok
    // 2- se nao, falar "numero de cartas invalida" e pedir para inserir a quantidade novamente ===ok
    // 3- se sim, nao fazer nada e continuar para o proximo..  ===ok 

    let notFind = true
    for (let c=0; c < allowed.length; c++){
        if(cardQuantity === allowed[c]){
          notFind = false
          startGame()
          break
        } 
    }
    if (notFind === true){
      checkQuantity()
    }
  }


  // selecia cartas para o jogo 
    // 1- embaralhar as cartas(cards) ===ok
    // 2- dividir a qtde de cartas selecionas por 2 e criar uma nova lista(gamecards) com a qtde da divisao ===ok
    // 3- duplicar a lista(gamecards) ===ok
   function startGame(){
    cards.sort(comparador)
    for (let i=0; i< cardQuantity/2; i++){
      gameCards.push(cards[i])
    }
    gameCards = gameCards.concat(gameCards)
    gameCards.sort(comparador)
    console.log(gameCards)


  const insertCard = document.querySelector("#box-card");
  let i = 0;
  while (i < gameCards.length) {
    insertCard.innerHTML += `
    <div onclick="turnUP(this)" class="card" >
    <div class="front-face face">
    <img src="./img/front10.png"  />
    </div>
    <div class="back-face face">
      <img src="${gameCards[i]}" id="img"/>
    </div>
  </div>`;
    i++;
  }
}



// Ao clicar em uma carta, a mesma deve ser virada
// se for a 1º, permanecer virada ate clicar na segunda
// se for a 2º:
// 1- 2º = 1º permanecer virada
// 2- 2º != 1º apos 1 segundo virar p/ baixo

//virar carta ao clicar 
function turnUP(card) {
  card.classList.add("flip");
  verificarAscartas()
}

function verificarAscartas(){
    // verificar se tem 2 cartas com a ".flip" ===ok
    // verificar se 2ºcarta  === 1ºcarta
    const cartasComFlip = document.querySelectorAll(".flip");
    if (cartasComFlip.length === 2) {
      if (cartasComFlip[0].innerHTML === cartasComFlip[1].innerHTML){
        console.log("sim ")
      } else{
        console.log("nao")
      }
     
  
     /*
      const compararImg = document.querySelectorAll(".flip img#img");
      console.log(compararImg);
      if (compararImg[0] === compararImg[1]) {
        console.log("sim ")
      } else{
        console.log("nao")
      }*/
        
      
      }
    }

  




function turnDown(){
  let firstCard = document.querySelector(".flipe")
  firstCard.classList.remove("flip")
}


function comparador() { 
	return Math.random() - 0.5; 
}

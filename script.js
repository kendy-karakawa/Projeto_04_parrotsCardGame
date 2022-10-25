let cardQuantity; // quantidade de cartas selecionados
let allowed = [4, 6, 8, 10, 12, 14]; // nº de cartas permitidos
let gameCards = [];
let cards = ["./img/american.png","./img/basque.png","./img/boliche.png","./img/fute.png","./img/sinuca.png","./img/tenis.png","./img/volei.png",   ]
let moves = 0;
let times = 0;
let codInterval;

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
          codInterval = setInterval(countTime, 1000)
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

function countTime(){
 times ++;
 const clock = document.querySelector(".clock");
 clock.innerHTML = times;
}

//virar carta ao clicar 
function turnUP(card) {
  moves++;

  if (card.classList.contains("flip")){
    return
  }

  if (listTurnUP[0] === undefined || listTurnUP[1] === undefined){
    
  

  card.classList.add("flip");
  listTurnUP.push(card);
  checkCards();
}
  
}

let listTurnUP = [];

function checkCards(){
    // verificar se tem 2 cartas com viradas ===ok
    // verificar se 2ºcarta  === 1ºcarta
    
    if (listTurnUP.length %2 === 0) { 
      let eIgual = false; 
      for (let i =0; i<listTurnUP.length-1; i++){
        
        if (listTurnUP[listTurnUP.length-1].innerHTML === listTurnUP[i].innerHTML){
          
          eIgual = true
          listTurnUP.pop()
          listTurnUP.pop()

          
          if (document.querySelectorAll(".flip").length ===cardQuantity){
            setTimeout(endGame,500)
            clearInterval(codInterval)
          }
          break
        }
       
      }
      if (eIgual === false){

        
        setTimeout(turnDown,1000)
      }
    
      }
    }

function turnDown(){
 
  listTurnUP[listTurnUP.length-1].classList.remove("flip")
  listTurnUP[listTurnUP.length-2].classList.remove("flip")
  listTurnUP.pop()
  listTurnUP.pop()

}

function endGame (){
  alert(`Parabéns! Você ganhou em ${moves} jogadas e em ${times} segundos!`)
  restart()
}

function restart(){
  let again = confirm("Quer jogar mais uma vez ?")
  
  if(again === true){
    location.reload()
  }
}


function comparador() { 
	return Math.random() - 0.5; 
}

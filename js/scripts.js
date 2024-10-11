let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//noCheckVelha
let noVelha = true;

//array para armazenar a função de clique
let boxClick = [];
//add o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener(
    "click",
    (boxClick[i] = function () {
      clicou(this);
    })
  );
}

choosePlayer();

function choosePlayer() {
  //evento para saber o tipo de player
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      secondPlayer = this.getAttribute("id");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.display = "none";
      }

      setTimeout(function () {
        let container = document.querySelector("#container");
        container.classList.remove("hide");
      }, 500);
    });
  }
}

function checkElement(player1, player2) {
  if (player1 == player2) {
    //x
    element = x;
  } else {
    //o
    element = o;
  }

  return element;
}

function checkWinCondiction() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //checando horizontais
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  //verificando verticais
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  //verificando diagonais
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      declareWinner("x");
      noVelha = false;
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      declareWinner("o");
      noVelha = false;
    }
  }

  let counter = 0;
  //Verificando se deu velha
  checkVelha(noVelha);
}

function declareWinner(winner) {
  let scoreBoardX = document.querySelector("#scoreboard-1");
  let scoreBoardO = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
    msg = "O jogador 1 venceu.";
  } else if (winner == "o") {
    scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
    msg = "O jogador 2 venceu.";
  } else {
    msg = "Deu Velha!";
  }

  //exibindo mensagem
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  removeClick();

  //esconde msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  //esconde msg
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3000);

  //zera as jogadas
  player1 = 0;
  player2 = 0;

  //remove x e 0
  let boxesToRemove = document.querySelectorAll(".box div");

  setTimeout(function () {
    for (let i = 0; i < boxesToRemove.length; i++) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
    addClick();
  }, 3000);
}

function clicou(boxes) {
  let element = checkElement(player1, player2);

  //verifica se o boxe já tem algum nó filho
  if (boxes.childNodes.length == 0) {
    let clone = element.cloneNode(true);

    boxes.appendChild(clone);

    //computar jogada

    if (player1 == player2) {
      player1++;

      if (secondPlayer == "ai-player") {
        //executa a jogada
        computerPlay();
        player2++;
      }
    } else {
      player2++;
    }
    checkWinCondiction();
  }
}

function removeClick() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", boxClick[i]);
  }
}

function addClick() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClick[i]); // Adiciona função click novamente
  }
}

function checkVelha(check) {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  if (counter == 9 && check) {
    declareWinner("Deu velha!");
  }
}

function computerPlay() {
  let cloneO = o.cloneNode(true);
  let emptyBoxes = [];

  // Procurar todas as boxes vazias
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes.length == 0) {
      emptyBoxes.push(boxes[i]);
    }
  }

  // Se houver boxes vazias, escolha uma aleatoriamente
  if (emptyBoxes.length > 0) {
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    emptyBoxes[randomIndex].appendChild(cloneO);
  }
}

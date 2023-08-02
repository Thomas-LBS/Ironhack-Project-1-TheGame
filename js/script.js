window.onload = function () {
  // buttons
  const tryBtn = document.getElementById("try-btn")
  const startBtn = document.getElementById("start-btn")
  const restartBtn = document.getElementById("restart-btn")
  const homeBtn = document.getElementById("home-btn")
  const restartBtn2 = document.getElementById("restart-btn2")
  const homeBtn2 = document.getElementById("home-btn2")
  const playerImmageBtn1 = document.getElementById("player-immage-btn1")
  const playerImmageBtn2 = document.getElementById("player-immage-btn2")
  const playerImmageBtn3 = document.getElementById("player-immage-btn3")

  // html elements to display: on/off
  const firstScreen = document.getElementById("first-screen")
  const launchScreen = document.getElementById("launch-screen")
  const logoDisplay = document.getElementById("logo-big")
  const stats = document.getElementById("stats-container")
  const endScreen = document.getElementById("end-screen")
    
    
  // Go to the game launcher screen 
  tryBtn.addEventListener("click", function () {    
    firstScreen.style.display = "none"
    logoDisplay.style.display = "none"
    launchScreen.style.display = "block"
    stats.style.display = "block"
    changeTheQuote ()           
  })
 
  
  // select the player image
  let playerImageSelection

  playerImmageBtn1.addEventListener("click", function () {
    playerImageSelection = "./images/Koi-Fish-Player1.gif"  
    startBtn.style.visibility = "visible"
  })

  playerImmageBtn2.addEventListener("click", function () {
    playerImageSelection = "./images/Koi-Fish-Player2.gif"  
    startBtn.style.visibility = "visible"
  })

  playerImmageBtn3.addEventListener("click", function () {
    playerImageSelection = "./images/Koi-Fish-Player3.gif"  
    startBtn.style.visibility = "visible"
  })
      

  // Set the game board and Launch the game
  let game

  startBtn.addEventListener("click", function () {
    launchScreen.style.display = "none"
    endScreen.style.display = "non"
    launchGame()
  })

  function launchGame() {
    game = new Game(playerImageSelection)
    game.start()    
  }
    
  // Function that handles keydown event for AZERTY & QWERTY & ARROWS
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "a", "A",
      "q", "Q",
      "ArrowUp",
      "w", "W",
      "z", "Z",
      "ArrowRight",
      "d", "D",
      "ArrowDown",
      "s", "S",
    ]
    
    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
    event.preventDefault();
    
    // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
        case "a":
        case "A":
        case "q":
        case "Q":
        game.player.directionX += -speedDirection;
        break;

        case "ArrowUp":
        case "w":
        case "W":
        case "z":
        case "Z":
        game.player.directionY += -speedDirection;
        break;

        case "ArrowRight":
        case "d":
        case "D":
        game.player.directionX += speedDirection;
        break;

        case "ArrowDown":
        case "s":
        case "S":
        game.player.directionY += speedDirection;
        break;
      }
    }
  }

  // increase the speed of the Player
  let speedDirection = Math.floor(1 + game.level / 10)
  
    
  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown)

  // restart a new game
  restartBtn.addEventListener("click", function () {
    game.endGame()
    launchGame()
  })
  restartBtn2.addEventListener("click", function () {
    game.endGame()
    launchGame()
  })

  // return home
  homeBtn.addEventListener("click", function () {
    location.reload()
  })
  homeBtn2.addEventListener("click", function () {
    location.reload()
  })

}

// function that change the footer quote each minute
function changeTheQuote(){
  const quote = document.getElementById("quote")

  let myQuote = setInterval(() => {
  const sentences = [
    '"It always seems impossible until it is done."',
    '"failure is not fatal: It is the courage to continue that counts."',
    '"The only guarantee for failure is to stop trying."',
    '"The man who moves a mountain begins by carrying away small stones."',
    '"Success is the sum of small efforts, repeated day in and day out."',
    '"It does not matter how slowly you go so long as you do not stop."',
    '"Never confuse a single defeat with a final defeat."',
    '"We will either find a way or make one."',
    '"The best way out is always through."',
    '"A winner is just a loser who tried one more time."'
  ]     

  const oneSentence = sentences[Math.floor(Math.random() * 10)]
  quote.innerHTML = oneSentence
  }, 10000)

  return myQuote
}




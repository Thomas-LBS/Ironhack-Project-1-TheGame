window.onload = function () {
    const tryBtn = document.getElementById("try-btn")
    const startBtn = document.getElementById("start-btn")
    const restartBtn = document.getElementById("restart-btn")
    const homeBtn = document.getElementById("home-btn")
    const firstScreen = document.getElementById("first-screen")
    const launchScreen = document.getElementById("launch-screen")
    const logoDisplay = document.getElementById("logo-big") 
    const playScreen = document.getElementById("play-screen")

    const endScreen = document.getElementById("end-screen")
    
    
    // Go to the game launcher screen 
      tryBtn.addEventListener("click", function () {    
      firstScreen.style.display = "none"
      logoDisplay.style.display = "none"
      launchScreen.style.display = "block"           
      })   
      

     // Set the game board and Launch the game

     /* ajouter curso none sur le board #game-screen {cursor: none;}*/
        let game

      startBtn.addEventListener("click", function () {
        launchScreen.style.display = "none"
        playScreen.style.display = "block"
        const gameBoard = new GameBoard(500, 700)  
        launchGame()
      })
    
      function launchGame() {
        game = new Game()
        game.start()    
      }
    
    // Function that handles keydown event for AZERTY & QWERTY
    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "KeyA",
        "KeyQ",
        "ArrowUp",
        "KeyW",
        "KeyZ",
        "ArrowRight",
        "KeyD",
        "ArrowDown",
        "KeyS",
      ]
    
      // Check if the pressed key is in the possibleKeystrokes array
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault()
    
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft", "KeyA", "KeyA":
            game.player.directionX = -1;
            break;
          case "ArrowUp", "KeyW", "KeyZ":
            game.player.directionY = -1;
            break;
          case "ArrowRight", "KeyD":
            game.player.directionX = 1;
            break;
          case "ArrowDown", "KeyS":
            game.player.directionY = 1;
            break;
        }
      }
    }
    
    // Add the handleKeydown function as an event listener for the keydown event
    window.addEventListener("keydown", handleKeydown)
    
    //restart a new game
    restartBtn.addEventListener("click", function () {
      launchGame()
    })
    
    //return home
    homeBtn.addEventListener("click", function () {
      location.reload()
    })
    }
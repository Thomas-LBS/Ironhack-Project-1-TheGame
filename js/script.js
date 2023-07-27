window.onload = function () {
    const tryBtn = document.getElementById("try-btn")
    const startBtn = document.getElementById("start-btn")
    const restartBtn = document.getElementById("restart-btn")
    const homeBtn = document.getElementById("home-btn")
    
    // Go to the game launcher screen

    tryBtn.addEventListener("click", function () {
        //create funtion to the gamelauncher
      });

    

    // Launch the game
        let game

      startBtn.addEventListener("click", function () {
        launchGame();
      });
    
      function launchGame() {
        game = new Game();
        game.start();        
      }
    
    // Function that handles keydown event
    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
    
      // Check if the pressed key is in the possibleKeystrokes array
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
    
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
    }
    
    // Add the handleKeydown function as an event listener for the keydown event
    window.addEventListener("keydown", handleKeydown);
    
    //restart a new game
    restartBtn.addEventListener("click", function () {
      launchGame();
    });
    
    //return home
    homeBtn.addEventListener("click", function () {
      console.log("reload the page")
      location.reload();
    });
    }
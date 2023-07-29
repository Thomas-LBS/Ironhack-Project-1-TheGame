window.onload = function () {
  //buttons
    const tryBtn = document.getElementById("try-btn")
    const startBtn = document.getElementById("start-btn")
    const restartBtn = document.getElementById("restart-btn")
    const homeBtn = document.getElementById("home-btn")
  //html elements to display: on/off
    const firstScreen = document.getElementById("first-screen")
    const launchScreen = document.getElementById("launch-screen")
    const logoDisplay = document.getElementById("logo-big")
    const stats = document.getElementById("stats-container")
    const playScreen = document.getElementById("play-screen")   
    
    
    // Go to the game launcher screen 
      tryBtn.addEventListener("click", function () {    
      firstScreen.style.display = "none"
      logoDisplay.style.display = "none"
      launchScreen.style.display = "block"
      stats.style.display = "block"
      changeTheQuote ()           
      })   
      

     // Set the game board and Launch the game

      let game

      startBtn.addEventListener("click", function () {
        playScreen.style.display = "block"
        launchScreen.style.display = "none"
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
      console.log(key)
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft":
          case "a":
          case "A":
          case "q":
          case "Q":
            game.player.directionX += -1;
            break;

          case "ArrowUp":
          case "w":
          case "W":
          case "z":
          case "Z":
            game.player.directionY += -1;
            break;

          case "ArrowRight":
          case "d":
          case "D":
            game.player.directionX += 1;
            break;

          case "ArrowDown":
          case "s":
          case "S":
            game.player.directionY += 1;
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
      }, 10000);

    return myQuote
    }




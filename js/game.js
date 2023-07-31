
class Game {
    constructor (playerImageSelection){

    this.playScreen = document.getElementById("play-screen")     
    this.gameScreen = document.getElementById("game-screen")       
    this.endScreen = document.getElementById("end-screen")
    this.looseScreen = document.getElementById("loose-infos")
    this.winScreen = document.getElementById("win-infos")
    this.playerImage = playerImageSelection
   

    
        this.player = new Player(
            this.gameScreen,
            (500-42)/2,    //left
            700-100,        //top
            42,            //width
            100,            //height
            this.playerImage) //image
    
        this.height = 700
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.level = 1 
        this.lives = 3   
        this.gameIsOver = false
        }
        

// Game Start
    start(){
        this.gameScreen.style.display = "block"
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.endScreen.style.display = "none"
        document.getElementById("score").innerHTML = this.score
        document.getElementById("level").innerHTML = this.level
        document.getElementById("lives").innerHTML = this.lives 
        this.gameLoop()
        }

// Game Loop
gameLoop(){

    //losing ending
    if(this.gameIsOver){
        return
    }

    this.update()
    window.requestAnimationFrame(() => this.gameLoop())    
}

// Game Update
update(){
    this.player.move()



// create the ending condition 
    if (this.lives === 0) {
    this.endGame("loose")
    }

// create a winning condition
    else if (this.level === 101) {
    this.endGame("win")
    }
}



// Create a new method responsible for ending the game
endGame(status) {
  this.player.element.remove()
  this.obstacles.forEach(obstacle => obstacle.element.remove())
  this.gameIsOver = true

  // display the endscreen
  this.playScreen.style.display = "none"
  this.endScreen.style.display = "block"
  


 // display the information depending on the endGameStatus  
  if (status === "loose"){
    this.looseScreen.style.display = "block"
  }

  if (status === "win"){
    this.winScreen.style.display = "block"
  }


}
}


class Game {
    constructor (){

    this.gameScreen = document.getElementById("game-screen")
    this.playScreen = document.getElementById("play-screen")    
    this.endScreen = document.getElementById("end-screen")

    
        this.player = new Player(
            this.gameScreen,
            (500-42)/2,    //left
            700-100,        //top
            42,            //width
            100,            //height
            "/images/Koi-Droite.png")
    
        this.height = 700
        this.width = 500
        this.obstacles = []
        this.score = 0 
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
        document.getElementById("lives").innerHTML = this.lives 
        this.gameLoop()
        }

// Game Loop
gameLoop(){
    
    if(this.gameIsOver){
        return
    }
    this.update()
    window.requestAnimationFrame(() => this.gameLoop())    
}

// Game Update
update(){
    this.player.move()
    }



// Create a new method responsible for ending the game
endGame() {
  this.player.element.remove();
  this.obstacles.forEach(obstacle => obstacle.element.remove());

  this.gameIsOver = true;

  // Hide game screen
  this.gameScreen.style.display = "none";
  // Show end game screen
  this.endScreen.style.display = "block";
}
}


class Game {
    constructor (playerImageSelection){
        this.playScreen = document.getElementById("play-screen")    
        this.gameScreen = document.getElementById("game-screen")       
        this.endScreen = document.getElementById("end-screen")
        this.looseScreen = document.getElementById("loose-infos")
        this.winScreen = document.getElementById("win-infos")
        this.playerImage = playerImageSelection
        this.gameScreenSpeed = document.getElementById("game-screen")
        this.speedAnimation = ["30s", "28s", "26s", "24s", "22s", "20s", "16s", "12s", "8s", "4s", "1s"]
                
   
    // create a new player
        this.player = new Player(
            this.gameScreen,
            (500-42)/2,         //left
            700-100,            //top
            42,                 //width
            100,                //height
            this.playerImage)   //image

    // create a new ennemy
        this.ennemy = new Ennemy(
            this.gameScreen,
            (500-100)/2,        //left
            0,               //top
            75,                //width
            75,                //height
            "./images/Rock-1.png") //image
        
        this.ennemy2 = new Ennemy(
            this.gameScreen,
            (500-200)/2,        //left
            0,               //top
            55,                //width
            125,                //height
            "./images/Rock-2.png") //image

        this.height = 700
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.level = 0
        this.lives = 3  
        this.gameIsOver = false
    }
        

    // Game Start
    start(){
        this.playScreen.style.display = "block"
        this.gameScreen.style.display = "block"
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.endScreen.style.display = "none"
        document.getElementById("score").innerHTML = this.score
        document.getElementById("lives").innerHTML = this.lives 
        
        // raise the level every X sec
        this.increaseTheLevel()
                      
        //launch the loop
        this.gameLoop()
    }

    // Game Loop
    gameLoop(){
        //ending the loop
        if(this.gameIsOver){
            return
        }
        // Continue the loop
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
        else if (this.level === 100) {
            this.endGame("win")
        }

    }


    // how the levels increase to 100 and raise the difficulty
    increaseTheLevel(params) {        
        setInterval(() => {
            if (this.level < 100){
                this.level += 1
                document.getElementById("level").innerHTML = this.level

                //raise the speed of the screen
                this.gameScreenSpeed.style.animationDuration = this.speedAnimation[this.level/10]
            }
        },1000)    
    }
   

    // create the end game conditions
    endGame(status) {
        this.player.element.remove()
        this.obstacles.forEach(obstacle => obstacle.element.remove())
        this.gameIsOver = true

    // display the endscreen
        this.gameScreen.style.display = "none"
        this.endScreen.style.display = "block"

        // display the information depending on the endGameStatus  
        if (status === "loose"){
            this.looseScreen.style.display = "block"
            this.winScreen.style.display = "none"
            this.playScreen.style.display = "none"
        }

        if (status === "win"){
            this.winScreen.style.display = "block"
            this.looseScreen.style.display = "none"
            this.playScreen.style.display = "none"
        }
    }
}

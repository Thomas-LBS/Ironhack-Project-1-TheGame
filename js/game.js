
class Game {
    constructor (playerImageSelection){
        this.playScreen = document.getElementById("play-screen")    
        this.gameScreen = document.getElementById("game-screen")       
        this.endScreen = document.getElementById("end-screen")
        this.looseScreen = document.getElementById("loose-infos")
        this.winScreen = document.getElementById("win-infos")
        this.playerImage = playerImageSelection
        this.gameScreenSpeed = document.getElementById("game-screen")
        this.gameScreenSpeed.style.animationDuration = "30s"
        this.speedAnimation = ["30s", "27s", "24s", "21s", "18s", "15s", "11s", "7s", "3s", "1s"]
        this.ambianceSound = new Audio("./sounds/Peritune-Sakuya2.mp3")
        this.winSound = new Audio("./sounds/success-fanfare-trumpets.mp3")
        this.looseSound = new Audio("./sounds/knife-stab.mp3")
        this.collideSound = new Audio("./sounds/huge-slap.mp3")       
   
    // create a new player
        this.player = new Player(
            this.gameScreen,
            (500-42)/2,         //left
            700-100,            //top
            42,                 //width
            100,                //height
            this.playerImage)   //image

    
        this.height = 700
        this.width = 500
        this.ennemies = []
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
        document.getElementById("level").innerHTML = this.level 
        
        // raise the level every X sec
        this.increaseTheLevel()
                      
        //launch the loop
        this.gameLoop()
    }

    // Game Loop
    gameLoop(){
        //ending the loop
        if(this.gameIsOver){
            this.ambianceSound.pause()
            // ending sounds
            if (this.lives === 0){
                this.looseSound.play()
            }
            if (this.level === 100){
                this.winSound.play()
            }

            return
        }

        // Continue the loop
        this.ambianceSound.play()
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

        for (let i = 0; i < this.ennemies.length; i++) {
            const ennemy = this.ennemies[i];
            ennemy.move();
        
            // collision logic
            if (this.player.didCollide(ennemy)) {          
                
                //sound animation
                this.collideSound.play()

                // remove the ennemy
                ennemy.element.remove()
                this.ennemies.splice(i, 1)
                
                // actualise lives and i
                this.lives--
                document.getElementById("lives").innerHTML = this.lives
                i--
            }

            // score logic
            else if (ennemy.top > this.height) {
            
                this.score++ 
                document.getElementById("score").innerHTML = this.score

                //remove the ennemy
                ennemy.element.remove()
                this.ennemies.splice(i, 1)
                i--
            }

            
        }

        //create new Ennemy randomly
        this.createEnnemies()        
    }

    //create ennemies
    createEnnemies(){
        let ennemiesNumeber = 3
        if (this.level <= 25){ennemiesNumeber = 3}
        else if (this.level <= 50){ennemiesNumeber = 4}
        else if (this.level <= 75){ennemiesNumeber = 5}
        else if (this.level <= 100){ennemiesNumeber = 6}

        if (Math.random() > 0.99 && this.ennemies.length < ennemiesNumeber) {
            this.ennemies.push(new Ennemy(this.gameScreen, Math.floor(30 + Math.random() * 366), 1-75, 75, 75, "./images/Rock-1.png"))
        }
        if (Math.random() > 0.99 && this.ennemies.length < ennemiesNumeber) {
            this.ennemies.push(new Ennemy(this.gameScreen, Math.floor(30 + Math.random() * 386), 1-125, 55, 125, "./images/Rock-2.png"))
        }
    }
    


    // how the levels increase to 100 and raise the difficulty
        
    increaseTheLevel() {
        const intervalId = setInterval(() => {
            if (this.gameIsOver) {
                clearInterval(intervalId)
            }

            else {
                this.level ++
                document.getElementById("level").innerHTML = this.level
                this.gameScreenSpeed.style.animationDuration = this.speedAnimation[Math.floor(this.level/10)]
            }
        }, 1000)
    }   

    // create the end game conditions
    endGame(status) {
        this.player.element.remove()
        this.ennemies.forEach(ennemy => ennemy.element.remove())
               
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

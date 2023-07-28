//Game board is needed to increase the spead of the slide

class GameBoard {
    constructor(w, h) {
        this.w = w
        this.h = h
        this.board = document.getElementById("board-game")
        this.board.style.width = `${this.w}px`
        this.board.style.height = `${this.h}px`
    }
}

class Game {
    constructor (){

    }

// Game Start
    start(){
}
}
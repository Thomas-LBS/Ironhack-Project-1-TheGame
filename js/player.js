class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement("img")
    
        this.element.src = imgSrc
        this.element.style.position = "absolute"
        // Set up the default element's property values
        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    
        this.gameScreen.appendChild(this.element)
      }

      move(){
        this.left += this.directionX
        this.top += this.directionY
        //left limit
        if (this.left < 30) {
            this.left = 30
            }
        //top limit
        if (this.top < 5) {
            this.top = 5
            }
        //right limit
        if (this.left > this.gameScreen.offsetWidth - this.width - 30) {
            this.left = this.gameScreen.offsetWidth - this.width - 30
            }
        //bottom
        if (this.top > this.gameScreen.offsetHeight - this.height - 5) {
            this.top = this.gameScreen.offsetHeight - this.height - 5
            }

        this.updatePosition()
      }

      updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }


}

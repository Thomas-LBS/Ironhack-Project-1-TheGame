class Ennemy extends Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      
      // `super` refers to the constructor of the parent
      super(gameScreen, left, top, width, height, imgSrc);
      // <== a new attribute
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
        this.top += 3;
        this.updatePosition();
    }
  }
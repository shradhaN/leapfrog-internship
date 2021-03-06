const Car = function (startPosition, width, height) {
  this.width = width;
  this.height = height;
  this.position = {
    'start': startPosition,
    'end': new Position(startPosition.x + this.width, startPosition.y + this.height)
  }

  this.draw = (ctx) => {
    ctx.drawImage(images.player, this.position.start.x, this.position.start.y, this.width, this.height);
  }

  this.moveDown = () => {
    this.position.start.y += Game.speed;
    this.position.end.y += Game.speed;
  }
}
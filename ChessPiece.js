export class ChessPiece {

  static piecePositions = []
  #xPos;
  #yPos;

  constructor(xPos, yPos) {
    this.#xPos = xPos;
    this.#yPos = yPos;
    ChessPiece.piecePositions.push(this);
  }

  get x() {
    return this.#xPos;
  }

  get y() {
    return this.#yPos;
  }
  
}
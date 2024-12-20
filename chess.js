import { ChessPiece } from './ChessPiece.js';

const canvas = document.getElementById("poo");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight;

const size = 400;
const squares = 8;
let squareSize = size/squares;

let startX = (canvas.width - size)/2;
let startY = (canvas.height - size)/2;
let files = "abcdefgh"
let ranks = "12345678"
ctx.font = '15px Arial';


for(let row = 0; row < squares; row++) {
    for(let col = 0; col < squares; col++) {
        //fills whole board light colour
        ctx.fillStyle = "#edc29a";
        if((row+col) % 2 != 0) {
            //makes dark grid
            ctx.fillStyle = "#6b5641";
        }
        
        //generates squares
        ctx.fillRect(col*squareSize+startX, row*squareSize+startY, squareSize, squareSize);

        // generates letters on bottom of board
        if(row == squares - 1) {
            if(col % 2 == 0) {
                ctx.fillStyle = "#edc29a";
            } else {
                ctx.fillStyle = "#6b5641";
            }
            ctx.fillText(files[col], startX+(squareSize*(col+1))-squareSize*0.2, startY+size-squareSize*0.04);
        }

        // generates numbers on side of board
        if(col == squares - 1) {
            if(row % 2 == 1) {
                ctx.fillStyle = "#edc29a";
            } else {
                ctx.fillStyle = "#6b5641";
            }
            ctx.fillText(ranks[row], startX+squareSize*0.04, startY+(squareSize*(row+1))-squareSize*0.72);
        }
    }
}


let piece = new ChessPiece(43531, 0);


console.log(piece.x)
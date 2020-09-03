let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//BACKGROUND
function BG() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//cria a cobrinha 
function snakeborn(){
    for(i=0; i <snake.length; i++){
        context.fillStyle = "Darkblue"
        context.fillRect(snake[i].x, snake[i].y, box, box); 
    }

}

BG();
snakeborn();
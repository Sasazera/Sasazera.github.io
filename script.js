let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

//Background
function BG() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

BG();
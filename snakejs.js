const boardBorder = 'black';
const boardBackground = '#ddd';
const snakeColor = 'lightblue';
const snakeborder = 'darkblue';

//Get the canvas element
const snakeBoard = document.getElementById('gameCanvas');
//Return a two dimentional drawing context
const snakeBoard_ctx = gameCanvas.getContext("2d");



let snake = [ {x: 200, y: 200},
              {x: 190, y: 200}, 
              {x: 180, y: 200}, 
              {x: 170, y: 200}, 
              {x: 160, y: 200}
            ]

function drawSnakePart(snakePart){
    snakeBoard_ctx.fillStyle = 'lightblue';
    snakeBoard_ctx.strokestyle = 'darkblue';
    snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake(){
    snake.forEach(drawSnakePart);
}

//Draw a border around the canvas
function clearCanvas(){
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    snakeboard_ctx.strokestyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a "border" around the entire canvas
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);

}



//main function called repeteatedly to keep the game running
function main(){
    clearCanvas();
    drawSnake();
}


//start Game
main();

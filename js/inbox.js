/* Method::1 - we will give margin to the food from Math.random() function of javascript
    we will generate two variable one for margin-left and other for margin-top  */

/* Method::2 - Even this can be done using grid system, where we will add different boxes for food & snake ,
 if food is in same grid as snake then it will initiate another event  */
let board = document.getElementById("board");
// let boardHeight = board.                             continue from here....


function foodPlace(){
    let food = document.getElementById('food');
    let foodMarginLeft = Math.random()* 730;
    let foodMarginTop = Math.random()* 490;
    food.style.marginLeft=(foodMarginLeft)+"px";
    food.style.marginTop=(foodMarginTop)+"px";
}
foodPlace();
// window.onload = foodPlace();

function snake_move(){
    let snakeBody = document.getElementById("snake");

    // console.log(snakeBody.innerText.length);
    // document.write(snakeBody);
    // let initial=[]
}
// snake_move();

function increase_snake_length(){
    let snakeLength = document.getElementById("snake");
    console.log(snakeLength.style("width"));
}

increase_snake_length();
/* we will give margin to the food from Math.random() function of javascript
    we will generate two variable one for margin-left and other for margin-top  */

function foodPlace(){
    let food = document.getElementById('food');
    let foodMarginLeft = math.random()* 50;
    let foodMarginTop = math.random()* 50;
    food.style.marginLeft=foodMarginLeft;
    food.style.marginTop=foodMarginTop;
}

window.onload = foodPlace();
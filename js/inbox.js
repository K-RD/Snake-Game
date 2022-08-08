/* Method::1 - we will give margin to the food from Math.random() function of javascript
    we will generate two variable one for margin-left and other for margin-top  */

/* Method::2 - Even this can be done using grid system, where we will add different boxes for food & snake ,
 if food is in same grid as snake then it will initiate another event  */

function foodPlace(){
    let food = document.getElementById('food');
    let foodMarginLeft = math.random()* 50;
    let foodMarginTop = math.random()* 50;
    food.style.marginLeft=foodMarginLeft;
    food.style.marginTop=foodMarginTop;
}

window.onload = foodPlace();
/* Method::1 - we will give margin to the food from Math.random() function of javascript
    we will generate two variable one for margin-left and other for margin-top  */

/* Method::2 - Even this can be done using grid system, where we will add different boxes for food & snake ,
 if food is in same grid as snake then it will initiate another event  */


//  Getting height & width of Board
 let board = document.getElementById("board");
 const boardHeight = board.clientHeight;
 const boardWidth = board.clientWidth;


function foodPlace(){
    let food = document.getElementById('food');
    let foodMarginLeft = Math.random()* boardWidth;
    let foodMarginTop = Math.random()* boardHeight;
    food.style.marginLeft=(foodMarginLeft)+"px";
    food.style.marginTop=(foodMarginTop)+"px";
}
foodPlace();
// window.onload = foodPlace();

function elementFetcherTop(id){
    let element = document.getElementById(id);
    let topPositionNew = element.offsetTop;
    return topPositionNew;
};
function elementFetcherLeft(id){
    let element = document.getElementById(id);
    let leftPositionNew = element.offsetLeft;
    return leftPositionNew;
};

function snake_move(event){
    const id = 'snake';
    let element = document.getElementById(id);
    let topPosition = elementFetcherTop(id);
    console.log('top position is ::'+topPosition);
    let leftPosition = elementFetcherLeft(id);
    console.log('left position is::'+leftPosition)
    console.log('|--------------------|')
    if (event.keyCode=='38'){                               //Up key
        console.log('margin top is ::'+element.style.marginTop +'    before')
        element.style.marginTop = (topPosition+10)+"px";
        console.log('margin top is ::'+element.style.marginTop +'    after')
        console.log('|--------------------------------------------------------|')
    }
    else if (event.keycode=='40'){                          //Down key
        element.style.marginTop = (topPosition+10)+"px";
    }
    else if (event.keycode=='37'){                          //Left  key
        element.style.marginLeft = (leftPosition-10)+"px";
    }
    else if (event.keycode=='39'){                          //Right key
        element.style.marginLeft = (leftPosition+10)+"px";
    }
}
window.addEventListener('keydown',snake_move);

// window.addEventListener('keydown',function(event){
//     switch (event.keyCode) {
//         case 37:
//             this.alert('Left key pressed');
//             console.log('Left key pressed');
//             break;
//         case 38:
//             this.alert('Up key pressed');
//             console.log('Left key pressed');
//             break;
//         case 39:
//             this.alert('Right key pressed');
//             console.log('Left key pressed');
//             break;
//         case 40:
//             this.alert('Down key pressed');
//             console.log('Left key pressed');
//             break;
//     }
// });


function increase_snake_length(){
    let snakeLength = document.getElementById("snake");
    // console.log(snakeLength.style("width"));
}

increase_snake_length();

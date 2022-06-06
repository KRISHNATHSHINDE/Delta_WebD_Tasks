var startButton = document.querySelector(".start");
var btn = document.querySelectorAll(".btn");
// var btn1 = document.querySelector("#btn1");
// var btn5 = document.querySelector("#btn5");
// var randomNumber = Math.floor(Math.random()*16+1);
// console.log(randomNumber);



// startButton.addEventListener("click", startClicked);

// var selectedButton = "btn"+randomNumber


// var anim = document.querySelector(".anim")

var startButtonClicked = startButton.addEventListener("click", game)

// var firstButtonPressed = btn1.addEventListener("click", gameOver);

// function animation (){
//     btn[randomNumber].classList.toggle("pulse");
// }



//  var fourth =  btn[4].classList.toggle("pulse");
    

// var btn5Pressed = btn5.addEventListener("click",blink11 )

// function game(){
//     btn[4].classList.toggle("pulse");
// }


// function blink11(){
//     btn[11].classList.toggle("pulse");
//     console.log(this)
    
// }


// function gameOver(){
//     alert("Game Over!");
// }

function game(){
    btn[4].classList.toggle("pulse");

        btn[4].addEventListener("click",function (){
        btn[11].classList.toggle("pulse");
        
        // console.log(this)
        return
    },true );
   
    
    for(i=0;i<=15;i++){
        if(i===0 || i===1 || i === 2 || i === 3 ||i ===5||i===6||i===7 ||i===8 || i===9 || i === 10  ||i===11||i ===12||i===13||i===14||i===15){
        btn[i].addEventListener("click", function(){
        alert("Game Over, Your Score is 0");

        // return
    })}}
        
    
    btn[11].addEventListener("click", function(){
        btn[2].classList.toggle("pulse");
        

        // console.log(this)
        return
    } )
}
// btn[4].removeEventListener("click",function (){
//     btn[11].classList.toggle("pulse")},false)

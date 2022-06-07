// Sorry for the terrible code n logic.I've tried my best and this is where ive reached.
var startButton = document.querySelector(".start");
var btn = document.querySelectorAll(".btn");
var startButtonClicked = startButton.addEventListener("click", game);


function game(){
    btn[4].classList.toggle("pulse");

        btn[4].addEventListener("click",function (){
        btn[11].classList.toggle("pulse");
        
        // console.log(this)
        return
    },true );
   
    
    for(i=0;i<=15;i++){
        if(i===0 || i===1 || i === 2 || i === 3 ||i ===5||i===6||i===7 ||i===8 || i===9 || i === 10 ||i ===12||i===13||i===14||i===15){
        btn[i].addEventListener("click", function(){
        alert("Game Over, Your Score is 0");

        return
    })}}
        
    
    btn[11].addEventListener("click", function(){
        btn[2].classList.toggle("pulse");
        

        // console.log(this)
        return
    } )
}
// btn[4].removeEventListener("click",function (){
//     btn[11].classList.toggle("pulse")},false)


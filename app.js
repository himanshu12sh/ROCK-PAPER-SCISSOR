let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

let user=document.querySelector("#user");
let comp=document.querySelector("#comp");

const generateChoice=()=>{
  let options=["rock","paper","scissor"]
  let rdIndx=Math.floor(Math.random()*3)

  return options[rdIndx]
}


const showWinner = (userWin) => {
  const msg = document.getElementById('msg');

  if(userWin){
    msg.innerText="Congratulations! You won"
    userScore++
    user.innerHTML=userScore;
    msg.style.backgroundColor="green"
    msg.style.color="black"

  } 
  else{
    msg.innerText=`Oops's You lose`
    msg.style.backgroundColor="red"
    msg.style.color="black"
    comp.innerHTML=compScore++;


    } 
}

const playGame=(userChoice)=>{
   console.log("User choice is ",userChoice)
   let compChoice=generateChoice()
   console.log("Comp choice is ",compChoice)

   if(userChoice===compChoice){
    console.log("Game draw")
    msg.innerText="Game draw,Play Again!"
    msg.style.backgroundColor="aqua"
    msg.style.color="black"

 }
 else{
   let userWin=true;
   if(userChoice==="rock"){
     if(compChoice==="scissor")
       userWin=false;
     else
       userWin=true;
      userScore++;
   }
 
   else if(userChoice==="paper"){
     if(compChoice==="rock")
        userWin=false;
     else
        userWin=true;
   }
 
   else if(userChoice==="scissor"){
     if(compChoice=="paper")
      userWin=false;
     else
     userWin=true;
   }
   showWinner(userWin)
 }
 
 
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id")
   // console.log("Choice was clicked",userChoice)

    playGame(userChoice)
  })
})
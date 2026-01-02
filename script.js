let playground = document.querySelector(".choosingstyle");
let hands = document.querySelectorAll(".stylecontainer");
let battleground = document.querySelector(".battlecontainer");

for(let i = 0; i < hands.length; i++){
    hands[i].addEventListener("click" , (e)=>{
        playground.style.display="none";
        battleground.style.display="block";
    })
}
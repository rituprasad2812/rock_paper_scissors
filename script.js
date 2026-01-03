let playground = document.querySelector(".choosingstyle");
let hands = document.querySelectorAll(".stylecontainer div");
let battleground = document.querySelector(".battlecontainer");

let player = document.querySelector(".playerchoice img");
let computer = document.querySelector(".compchoice img");
let userscore = document.getElementById("userscore");
let compscore = document.getElementById("compscore");

let replaybtn = document.querySelector(".replaybtn");

let computerchoices = ["rock", "paper", "scissor"];

let userScore = 0;
let compScore = 0;

let showwinner = (userwin) => {
    if (userwin === true) {
        console.log("you win");
        userScore++;
        userscore.innerText = `You: ${userScore}`;
    } else {
        console.log("you loose");
        compScore++;
        compscore.innerText = `Comp: ${compScore}`;
    }
}

for (let i = 0; i < hands.length; i++) {
    hands[i].addEventListener("click", (e) => {
        playground.style.display = "none";
        battleground.style.display = "block";
        const clicked = e.target.src;
        let playerchoices = e.target.alt;

        setTimeout(() => {
            battleground.classList.add("active");
            player.src = clicked;
            let randomchoice = computerchoices[Math.floor(Math.random() * computerchoices.length)];
            computer.src = `images/${randomchoice}.png`;

            if (playerchoices === randomchoice) {
                console.log("draw game");
            } else {
                let userwin = true;
                if (playerchoices === "rock") {
                    userwin = randomchoice === "paper" ? false : true;
                } else if (playerchoices === "paper") {
                    userwin = randomchoice === "rock" ? true : false;
                } else {
                    userwin = randomchoice === "rock" ? false : true;
                }
                showwinner(userwin);
            }

        }, 1000);

        replaybtn.addEventListener("click", ()=>{
            battleground.classList.remove("active");
            battleground.style.display = "none";  

            playground.style.display = "block";
            replaybtn.style.opacity = 0;

        })

        setTimeout(() =>{
            replaybtn.style.opacity = 1;
        }, 2000);
    })
}

let playground = document.querySelector(".choosingstyle");
let hands = document.querySelectorAll(".stylecontainer div");
let battleground = document.querySelector(".battlecontainer");

let player = document.querySelector(".playerchoice img");
let computer = document.querySelector(".compchoice img");

let computerchoices = ["rock", "paper", "scissor"];

let showwinner = (userwin) => {
    if (userwin === true) {
        console.log("you win");
    } else {
        console.log("you loose");
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
            computer.src = `${randomchoice}.png`;

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
    })
}

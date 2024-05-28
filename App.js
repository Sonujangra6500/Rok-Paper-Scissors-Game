let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () =>{
    const options = ["rok","paper","scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
};
const drawGame = () =>{
    msg.innerText = `match is draw.`;
    msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
    msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText =`you loss .${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    };
const playgame = (userchoice) => {
   const compchoice = gencompchoice();
if(userchoice === compchoice) {
  drawGame();
} else{
    let userwin = true;
    if(userchoice === "rok") {
        // compchoice === paper,scissors.
        userwin = compchoice === "paper" ? false : true;
    }else if(userchoice ==="paper") {
        //compchoice == =scissors , rok.
        userwin = compchoice === "scissors" ? false: true;
    } else {
        //compchoice === paper,rok.
        userwin = compchoice === "rok" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
}
};
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("Id");
      playgame(userchoice);
    })
});

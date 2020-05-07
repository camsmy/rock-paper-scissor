const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    ///start of the game
    const startGame = () =>{
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener('click',()=>{
                introScreen.classList.add("fadeOut");
                match.classList.add("fadeIn");
        });
    };
    ///play match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const compHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');
        
        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation="";
            })
        })

        ///computer options (random generated)
        const compOptions=['rock','paper','scissors'];

        options.forEach(options =>{
            options.addEventListener('click', function(){
                ///computer choice
                const compNum = Math.floor(Math.random() * 3);
                const compChoice = compOptions[compNum];
                ///check who wins

                setTimeout(()=>{
                    compareHand(this.textContent,compChoice);
                    //update images
                    playerHand.src=`./assets/${this.textContent}.png`;
                    compHand.src = `./assets/${compChoice}.png`;
                },2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                compHand.style.animation = "shakeComp 2s ease";
            });
        });
    };


    const updateScore= ()=>{
        const playerS = document.querySelector('.player-score p');
        const compS = document.querySelector('.computer-score p');
        playerS.textContent = pScore;
        compS.textContent = cScore;
    };

const compareHand = (pChoice,cChoice)=>{
    const winner = document.querySelector('.winner');
    if(pChoice === cChoice){
        winner.textContent = "It is a tie!";
        updateScore();
        return;
    }
    if(pChoice === 'rock'){
        if(cChoice === 'scissors'){
            winner.textContent = "Player Wins!";
            pScore++;
            updateScore();

            return;
        }
        else{
            winner.textContent= "Computer Wins!";
            cScore++;
            updateScore();

            return;
        }
    }
    if(pChoice === 'paper'){
        if(cChoice === 'scissors'){
            winner.textContent = "Computer Wins!";
            cScore++;        updateScore();

            return;
        }
        else{
            winner.textContent= "Player Wins!";
            pScore++;        updateScore();

            return;
        }
    }
    if(pChoice === 'scissors'){
        if(cChoice === 'rock'){
            winner.textContent = "Computer Wins!";
            cScore++;        updateScore();

            return;
        }
        else{
            winner.textContent= "Player Wins!";
            pScore++;        updateScore();

            return;
        }
    }
};

    ///calls the funtion to start the game
    startGame();
    playMatch();
};

game();///main function of the whole game
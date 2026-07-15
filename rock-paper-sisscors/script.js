  
  let score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            loose: 0,
            tie: 0
        };


        updatescorseelement();

        let isautoplay = false;
        let intervalID;

          document.querySelector('.js-auto-play-button')
         .addEventListener('click', () => {
          autoplay();
          });

        function autoplay(){

            if(!isautoplay){
                intervalID = setInterval(() => {
                    playerMove = pickComputerMove();
                    playgame(playerMove);

        document.querySelector('.auto-play-button')
        .innerHTML = 'Stop Playing';
       
                    
                }, 1000);

                isautoplay = true;
            }else{
                clearInterval(intervalID);
                isautoplay = false;

        document.querySelector('.auto-play-button')
        .innerHTML = 'Auto Play';
       
            }
        }

        document.body.addEventListener('keydown',(event)=>{
            if(event.key === 'a'){
                autoplay();
            }else if(event.key === 'Backspace'){
            score.win = 0;
            score.loose = 0;
            score.tie = 0;
            localStorage.removeItem('score');
            updatescorseelement();
            }
        })
        
         document.querySelector('.js-reset-button')
        .addEventListener('click',() =>{
           showtheconfirmation();
        });


        function showtheconfirmation() {
            document.querySelector('.js-reset-confirmation')
            .innerHTML = `
                Sure you want to reset ?
                <button class="js-reset-confirm-yes ">yes</button>
                <button class="js-reset-confirm-no ">no</button>
            `;

            document.querySelector('.js-reset-confirm-yes')
            .addEventListener('click',()=>{
                resetscore();
                hideresetconfirmation();
            });

            document.querySelector('.js-reset-confirm-no')
            .addEventListener('click',()=>{
             hideresetconfirmation();
            });
        }

            function hideresetconfirmation() {
            document.querySelector('.js-reset-confirmation')
            .innerHTML = '';
            }
      

        document.querySelector('.js-rock-button')
        .addEventListener('click',() =>{
            playgame('rock')
        });

         document.querySelector('.js-paper-button')
        .addEventListener('click',() =>{
            playgame('paper')
        });

         document.querySelector('.js-scissors-button')
        .addEventListener('click',() =>{
            playgame('scissors')
        });


        function playgame(playerMove) {
            const ComputerMove = pickComputerMove();
            let result = '';


            if (playerMove === 'rock') {
                if (ComputerMove === 'rock') {
                    result = 'Tie';
                } else if (ComputerMove === 'scissors') {
                    result = 'You Win';
                } else if (ComputerMove === 'paper') {
                    result = 'You Loose';
                }
            }
            if (playerMove === 'scissors') {
                if (ComputerMove === 'rock') {
                    result = 'You Loose';
                } else if (ComputerMove === 'scissors') {
                    result = 'Tie';
                } else if (ComputerMove === 'paper') {
                    result = 'You Win';
                }
            }
            if (playerMove === 'paper') {
                if (ComputerMove === 'rock') {
                    result = 'You Win';
                } else if (ComputerMove === 'scissors') {
                    result = 'You Loose';
                } else if (ComputerMove === 'paper') {
                    result = 'Tie';
                }
            }

            if (result === 'You Win') {
                score.win +=1;
            } else if (result === 'You Loose') {
                score.loose +=1;
            } else if (result === 'Tie') {
                score.tie +=1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updatescorseelement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = ` YOU 
             <img  src="${playerMove}-emoji.png" class="moves">  
             <img  src="${ComputerMove}-emoji.png" class="moves"> 
             COMPUTER`;
        }   

        function updatescorseelement() {
            document.querySelector('.js-score')
                .innerHTML = ` wins: ${score.win}, loose: ${score.loose}, tie: ${score.tie}`;
        }

        function pickComputerMove() {
            const randomnumber = Math.random();


            let ComputerMove = '';


            if (randomnumber >= 0 && randomnumber < 1 / 3) {
                ComputerMove = 'rock';
            } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
                ComputerMove = 'scissors';
            } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
                ComputerMove = 'paper';
            }

            return ComputerMove;
        }

        function resetscore(){
            score.win = 0;
            score.loose = 0;
            score.tie = 0;
            localStorage.removeItem('score');
            updatescorseelement();
        }

//the function which does all
function verify(){
    //welcome message to user
    console.log("let's play rock paper scissors!!!");
    // settings the countervalues to zero outside of the loop
    win=0;
    loss=0;
    for(i=0;i<5;i++){
        //input for user   
    player=prompt('rock,paper or scissors');
        //generation of computer choice
    computer=Math.round(Math.random()*100)+1;
    
    if(computer<=33){
        computer="rock";
    }
    else if(computer<=66 && computer>=34){
        computer='paper';
    }
    else{
        computer="scissors";
    }
    // calculate the result and update the counter
        player=player.toLowerCase();
        // if the playerchoice is rock
        if(player==='rock'){
          
         // comparing player choice with computer choice 
            if(computer==='rock'){
                console.log("it's a tie");
                
            }
            else if(computer==='paper'){
                console.log("you have lost paper wins");
                loss=loss+1;
                console.log("win " + win);
                console.log("loss "+loss);
                
                 }
               
                
            else {
                console.log("you have won scissors loses");
                win=win+1;
                 console.log("win " + win);
                 console.log("loss "+loss);
                
            }
            
           
        }
        // if player choice is paper
        if(player==='paper'){
          
          // comparing with computer choice
            if(computer==='rock'){
                console.log("you win paper beats rock");
                win=win+1;
                console.log("win " + win);
                console.log("loss "+loss);
                
            }
            else if(computer==='paper'){
                console.log("it's a tie");
                
              
                 }
               
                
            else {
                console.log("you have lost scissors win");
                loss=loss+1;
                 console.log("win " + win);
                 console.log("loss "+loss);
                
            }
            
           
        }
        //if playerchoice is scissors
        if(player==='scissors'){
            
          //comparing with computerchoice
            if(computer==='rock'){
                console.log("you lost rock beats scissors");
                
                loss=loss+1;
                console.log("win " + win);
                console.log("loss "+loss);
                
            }
            else if(computer==='paper'){
                console.log("you won scissors beats paper");
                win=win+1;
                console.log("win " + win);
                console.log("loss "+loss);
                
                 }
               
                
            else {
                console.log("it's a tie");
                             
            }
            
           
        }
    // repeating the loop more 4 times
    } 
    // random messages
    const messagelost=['FATALITY',"all we had to do was follow the damm train CJ","TRY AGAIN BOY","YOU CAN'T DO THIS","LOST AGAIN","HA HA HA", "WHY SO SERIOUS"]
    const lostr = messagelost[Math.floor(Math.random()*6)]
    const messagewin=['YOU HAVE WON CHAMPION','THE WEBSITE BELONGS TO YOU',"YOU HAVE PROVED YOUR WORTH","THE GOAT"]
    const winr=messagewin[Math.floor(Math.random()*3)]
    const messagetie=['I GUESS I HAVE MET MY RIVAL',"WHO ARE YOU?","WE SHOULD FIGHT AGAIN","OUR BATTLE WOULD BE LEGENDARY",'YOU HAVE COME THE CLOSEST']
    const tier=messagetie[Math.floor(Math.random()*4)]
    
    // win declaration
    if (win>loss){
        window.alert(winr);
    }
    else if(loss>win){
        window.alert(lostr);
    }
    else{
        window.alert(tier);
    }
    }
    console.log(verify());
    
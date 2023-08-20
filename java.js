// version 1.1 of rock papers scissors
//sets the values of win and loss counter to zero
win=0;
loss=0;   
// paper button variable            
const paperb = document.querySelector('#paperb');
//when paper button is clicked
paperb.addEventListener('click', () =>{
    //computer choice generator
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
    console.log('compchoice: '+computer); 
    //code for player choice paper vs computer
    if(computer==='rock'){
        // display the statement of match in div
        document.getElementById('resultnow').innerHTML="you win paper beats rock";
        // increments the value of win counter by 1 
        win=win+1;
      
        
    }
    else if(computer==='paper'){
        document.getElementById('resultnow').innerHTML="it's a tie";
        
      
         }
       
        
    else {
        document.getElementById('resultnow').innerHTML="you have lost scissors win";
        loss=loss+1;       
}

//updates the win value and loss value in div
document.getElementById('win').innerHTML='win: '+win; 
document.getElementById('loss').innerHTML='loss: '+loss; 
// result of the match is declared in case the last button was paper
if (win===5&&loss===5){
    document.getElementById('resultofmatch').innerHTML='Tied up one more round'
    win=0;
    loss=0;
    

}
else if (win===5&&loss<5){
    document.getElementById('resultofmatch').innerHTML='YOU WON!!!';
    win=0;
    loss=0;
}
else if (win<5&&loss===5){
    document.getElementById('resultofmatch').innerHTML='YOU LOST';
    win=0;
    loss=0;
} 
// reset the result to " "  in case last button was paper
else if(win<5&&loss<5){
    document.getElementById('resultofmatch').innerHTML=' ';}

})
    
//variable of scissors button
const scissorsb = document.querySelector('#scissorsb');
// when scissors button is pressed
scissorsb.addEventListener('click',()=>{
    //code for computer choice
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
    console.log('compchoice: '+computer);
   // code for playerchoice scissors vs computer
    if(computer==='rock'){
        document.getElementById('resultnow').innerHTML=("you lost rock beats scissors");
        
        loss=loss+1;
        
        
    }
    else if(computer==='paper'){
        document.getElementById('resultnow').innerHTML="you won scissors beats paper";
        win=win+1;
      
        
         }
       
        
    else {
        document.getElementById('resultnow').innerHTML="it's a tie";
                     
    }
    document.getElementById('win').innerHTML='win: '+win; 
    document.getElementById('loss').innerHTML='loss: '+loss; 
    //result declaration in case scissors was the last choice
    if (win===5&&loss===5){
        tietxt='Tied up one more round';
        document.getElementById('resultofmatch').innerHTML=tietxt;
        win=0;
        loss=0;
       
    
    }
    else if (win===5&&loss<5){
        wontxt='YOU WON!!!';
        document.getElementById('resultofmatch').innerHTML=wontxt;
       
        win=0;
        loss=0;
        ;
    }
    else if (win<5&&loss===5){
        losttxt='YOU LOST'
        document.getElementById('resultofmatch').innerHTML=losttxt;
        
        win=0;
        loss=0;
        
        
    }     
    // result reset if scissors was the last choice
    else if(win<5&&loss<5){
        document.getElementById('resultofmatch').innerHTML=' ';}
})
//code for rock button variable
const rockb = document.querySelector('#rockb');  
//when rock button is pressed
rockb.addEventListener('click',()=>{
    //computer choice generation
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
    console.log('compchoice: '+computer);
    //computation for playerchoice of rock
    if(computer==='rock'){
        console.log("it's a tie");
        
    }
    //player choice rock vs computer
    else if(computer==='paper'){
        document.getElementById('resultnow').innerHTML="you have lost paper wins";
        loss=loss+1;

        
         }
       
        
    else {
        document.getElementById('resultnow').innerHTML=  "you have won scissors loses";
        win=win+1;

                  
    }
    document.getElementById('win').innerHTML='win: '+win;   
    document.getElementById('loss').innerHTML='loss: '+loss; 
    //result declaration in case if rock was the last button
    if (win===5&&loss===5){
       
        document.getElementById('resultofmatch').innerHTML='Tied up one more round'
        win=0;
        loss=0;
    
    }
   
    else if (win===5&&loss<5){
        
        document.getElementById('resultofmatch').innerHTML='YOU WON!!!';
        win=0;
        loss=0;
    }
    else if (win<5&&loss===5){
       
        document.getElementById('resultofmatch').innerHTML='YOU LOST';
        win=0;
        loss=0;
    }     
    // reset result if rock was last button
    else if(win<5&&loss<5){
        document.getElementById('resultofmatch').innerHTML=' ';}
   
}

)





  
    // random messages
    const messagelost=['FATALITY',"all we had to do was follow the damm train CJ","TRY AGAIN BOY","YOU CAN'T DO THIS","LOST AGAIN","HA HA HA", "WHY SO SERIOUS"]
    const lostr = messagelost[Math.floor(Math.random()*6)]
    const messagewin=['YOU HAVE WON CHAMPION','THE WEBSITE BELONGS TO YOU',"YOU HAVE PROVED YOUR WORTH","THE GOAT"]
    const winr=messagewin[Math.floor(Math.random()*3)]
    const messagetie=['I GUESS I HAVE MET MY RIVAL',"WHO ARE YOU?","WE SHOULD FIGHT AGAIN","OUR BATTLE WOULD BE LEGENDARY",'YOU HAVE COME THE CLOSEST']
    const tier=messagetie[Math.floor(Math.random()*4)]
    

   
  
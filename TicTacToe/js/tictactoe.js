// This function will get fired once the DOM (Documment Object Model) is loaded.
//Also going to disable the stop button, since it is not needed until the game gets started.
window.onload = function( )  {
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); //disable the stop button since the game has not started
    //stop button will be grayed out (disabled)
}

//This function will roll the dice for a random number twice, once for each
// player. This will determine which player gets to take the first turn in game
// play.
function rollForTurn( )   {
    var xArray = [ ] ; // initializing our empty array
    var ranNum = ' ' ;// initializing the ranNum variable
    var minimum = 1 ;
    var maximum = 12 ;
    var first = ' ' ;
    var txt1 = ' ' ;
    for ( var i = 0 ; i <  2;  i++)  {// this lets us roll the dice twice
        // random whole number between 1 and 10
        ranNum = Math.floor(Math.random() * (maximum - minimum) + minimum);
        //figures the randum number and rounds to the nearest whole nuber
     xArray.push(ranNum) ;//pushes randon dice roll into the array
    }

    diceRoll ( ) ; //play dice sound effect for each players turn at rolling
    // the dice and build  the string to display each players roll of the dice
    for (i = 0 ; i < xArray.length; i++)  {//iterating through the saved dice
         //roll values.
        var result = i + 1; // the two dice rolls(player One and player 2)
        var pOne = xArray[0];//saves player one dice roll
        var pTwo = xArray[1];//saves player two dice roll
        if  (pOne == pTwo) {//need to rig so that there is no tie on the roll 
            //of the dice...causes bugs( so if there is a tie player one goes
             //first.
        pOne = 1;
        pTwo =  2;
        }
        txt1 = "Player 1 rolled [" + pOne + "] <br>";
        writeMsg(txt1);//Write to screen what player 1 rolled
        txt1 = txt1+'Player 2 rolled [' + pTwo+ '] <br><br>';
        setTimeout(function(){writeMsg(txt1);}, 1000);  // time delay for 
        //dramatic effect before writing to screen what player 2 rolled
    }
    //determine and concatenate string showing which player won the roll
    if(pOne > pTwo) {//if player 1 roll was higher
        first = "Player 1";
        setTimeout (function( ) {
            txt1 = txt + "Player 1 wins,  please choose a square.";
         } , 2000);
        setTimeout (function() {
            writeMsg(txt1); //write player 1 goes first
        } , 2000);
     } else if (pOne < pTwo) {//if player 2 roll  was higher
         first = "Player 2";
         setTimeout (function( ) {
            txt1 = txt + "Player 2 wins,  please choose a square.";
         } , 2000);
        setTimeout (function() {
            writeMsg(txt1); //write to screen player2 goes first
        } , 2000);
    }
    //pass which player won the roll(..and therefore plays first position in
    //the game)bundleRenderer.renderToStreamreturn first;  }
    return first;
}

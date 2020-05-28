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
function rollForTurn( )   {// this is the rolling of the dice function
    //(this has not been called yet see line)
    var xArray = [ ] ; // initializing our empty array
    var ranNum = ' ' ;// initializing the ranNum variable
    var minimum = 2 ;//Posible lowest roll for pair of dice
    var maximum = 12 ;//Possible highest roll for pair of dice
    var first = ' ' ; //will hold which player is determined to go first
    var txt1 = ' ' ;// will hold the text that pops up in display message box 
    //( who goes first, result of dice roll, etc)
    for ( var i = 0 ; i <  2;  i++)  {// this lets us roll the dice twice
        // random whole number between 1 and 10
        ranNum = Math.floor(Math.random() * (maximum - minimum) + minimum);
        //figures the randum number and rounds to the nearest whole nuber
     xArray.push(ranNum) ;//pushes randon dice roll value into the array
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
        pOne = 1;//if tie value o dice roll then make player 1 go first
        pTwo =  2;//if tie make player 2 second player
        }
        txt1 = "Player 1 rolled [" + pOne + "] <br>";// first message to write 
        //to display box
        writeMsg(txt1);//Write to screen what player 1 rolled
        txt1 = txt1+'Player 2 rolled [' + pTwo+ '] <br><br>';//second message
        // to write to display box( player 2's roll)
        setTimeout(function(){writeMsg(txt1);}, 1000);  // time delay for 
        //dramatic effect before writing to screen what player 2 rolled
    }
    //determine and concatenate string showing which player won the roll
    if(pOne > pTwo) {//conditional statement for if player 1 roll was higher
        first = "Player 1";// player 1 goes first
        setTimeout (function( ) {//pause before displaying the next prompt
            txt1 = txt1 + "Player 1 wins,  please choose a square.";
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


//------------------------------------------------------------------------
//Initiate the game,  roll for turn & determine the active player
//-------------------------------------------------------------------------
function startGame()  { // onclick of start button from HTML, game starts
    var xTurn = 0;// keep track of whose turn it is
    activePlayer= rollForTurn(); //this where rollForTurn is called 
    // active player will equal the result of the
    // rollForTurn fuction(which is the player that is going first)
    //activePlayer = either Player 1 or Player 2
    if(activePlayer ==" ") {//if it was a tie then re-roll ???
        activePlayer = rollForTurn();
    }
    setTimeoeut(function() {
        hideGameMsg();// makes the display box disappear after 4 seconds
    }, 4000);

    // assign proper state to the control buttons through color
    //(graying out or placing color on the buttons)
    var btn = document.getElementById('btnStart') ;
    btnDisabled(btn) ; // disable the start button since the game has started
    var btn = document.getElementById('btnStop') ;
    stopEnabled(btn) ; // enable the stop button since the game has started

    //Assign the ActivePlayer Info to the Console(bottom Left)
    var showPlayer = document.getElementById('showPlayer') ;
    showPlayer.innerHtml = activePlayer ;//displays who's turn it is 
    showPlayer.style.color = "green" ;// displays that info in green
}

// This function sets the style of the game buttons in disabled/enabled state
function btnDisabled(btn)  {// all disabled buttons are styled like this
    btn.style.color = "#fff" ;
    btn.style.border = "2px solid rgb(153, 153, 102)" ;
    btn.style.backgroundColor = "rgb(214, 214, 194)" ;
    btn.disabled = true ; // button IS DISABLED (turning off game start button)
}

// This function styles the game buttons while they are disabled/enabled
function stopEnabled(btn)  {
    btn.style.color = "#fff" ;
    btn.style.border = "2px solid rgb(204, 0, 0)";
    btn.style.backgroundColor = "rgb(255, 51, 51)" 
    btn.disabled = false; // turning on the game stop button
}


// function for whenever the user stops the current game  / reset game
function stopGame()  {//called by HTML line 138 in the console Right
    hideGameMsg() ; //clear the text and hide display message box
    var btn = document.getElementById('btnStart') ;
    startEnabled(btn) ; // enable the start button since game stopped
    var btn = document.getElementById('btnStop') ;
    btnDisabled(btn); // disable the stop button since game is stopped
    var showPlayer = document.getElementById('showPlayer') ;//get showPayer 
    showPlayer.innerHTML = "GameStopped" ;//change back to "Game Stopped"
    showPlayer.style.color = "red" ;//"Game Stopped" is printed in red

    //reset all game squares to their original state (empty)
    var arrayO = document.getElementsByClassName("O") ;
    var arrayX = document.getElementsByClassName("X") ;
    for ( var i = 0 ;  i < arrayO.length ; i++) {
        arrayO[i].style.transform = "translateY(-100%)" ;
    }
    for ( var i = 0 ;  i < arrayX.length ; i++) {
        arrayX[i].style.transform = "translateY(100%)" ;
    }
    //this clears the running log of all game moves
    document.getElementById('boardState').innerHTML = "" ;
}

// this function will show the message console and any text it may have
function showGameMsg()  {
    document.getElementById("gameMsgBox").style.display = 'block' ;
}

//this function will conceal the message console from view
function hideGameMsg()  {
    clearMsg() // clear the text from the message console
    document.getElementById('gameMsgBox').style.display = "none" ; 
    //hide the <div>in HTML document
}

// this function will write text to the game message console
function writeMsg(txt)  {
    showGameMsg() ;
    document.getElementById("gameMsg").innerHTML = txt;
}

//this function will clear the text from the message console
function clearMsg()  {// this hides the ( "<div>") element in the HTML document 
    document.getElementById("gameMsgBox").style.display = "none"; 
}

//this function is for the player configuration panel
//It checks the proposed avatar assignments / prevents them from being the same
function saveSettings()  {
    var p1Index = document.getElementById('player1').selectedIndex ; 
    // selected inde is the option that gets highlighted while choosing an option for Player 1
    var p1Selected = document.getElementById("player1").options ;
     //options is the options available to be chosen for Player 1
    var p2Index = document.getElementById('player2').selectedIndex ;
     // selected inde is the option that gets highlighted while choosing an option for Player 2
    var p2Selected = document.getElementById("player2").options ;
     //options is the options available to be chosen for Player 2
    if (p1Selected[p1Index].text == p2Selected[p2Index].text)  {
        // if both players select the same option this error alert pops up
        alert ("Error - Player 1   and   Player  2  cannot both be assigned a as :  " + p1selected[p1Index].text) ;
    }   else { // if they are acceptable ( not equal to each other) display the player avatars
        document.getElementById("p1Display").innerHTML = p1selected[p1Index].text ;
        document.getElementById("p2Display").innerHTML = p2selected[p2Index].text ;
    }
}

// this function returns the currently assigned avatar for each player
function getAvatars()    {
    var p1Avatar = document.getElementById("p1Display").innerHTML ;
    var p2Avatar = document.getElementById("p2Display").innerHTML ;
    var avatarArray = [p1Avatar, p2Avatar] ;
    return avatarArray ;    
}

// this function will return the active player's avatar
function determineAvatar()  {
    // determine the correct avatar to paint for the active player
    var avatarArray =  getAvatars() ; // returns an array of both player's assigned avatars
    var active = document.getElementById("showPlayer").innerHTML ; // get active player
    p1Avatar = avatarArray[0] ;
    p2Avatar = avatarArray[1] ;
    if  (active == "Player 1") { // check which player is active and their corresponding avatar
        var paintAvatar = p1Avatar ;
    } else if  (active == "Player 2") {
        var paintAvatar = p2Avatar ;
    }
    return paintAvatar ; // returned the correct avatar for the  active player
    }

    //this function changes active player over to the other player
    function avatarPlaced()  {
        var parseText = document.getElementById("gameMsg").innerHTML ;
        var showPlayer = document.getElementById("showPlayer") ; 
        //select the current element to memory
        //check if there is already a winner...if there is, then don't continue the game
        if  (parseText == "That's three in a row, Player 1 wins" || parseText ==   "That's three in a row, Player 2 wins" )  {
            showPlayer.innerHTML = "Game Stopped" ;
            showPlayer.style.color = "red" ;
        }
        activePlayer  =  showPlayetr.innerHTML ; 
        // get the current player from the element
        if (activePlayer == "Player 1") { //once active player selects a square change the active player
        showPlayer.innerHTML ="Player 2";
    } else  {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie() ; // call this function to inquire if there was a tie( a cat's game)
    }

    //this function will get the array of the current board
    //and check the proposed move for validity
    function check(info,square)  {
        for (var i in info)  {
            var tempInfo = info[i].charAt(0);
        //comparing index of square on game board
            if (tempInfo == square) {
        return tempInfo;
            }       
        }
    }
    

    // as squares are selected they check in with this function to see if that
    // particular square has already been assigned and if it has not, 
    // then record the unassigned square with the assigned avatar
function recordMoves(square)  {
    var proposedMove = square ;
    var boardState = document.getElementById("boardState").innerHTML ;
    // retrieve boardState array
    var info =  boardState.split(',') ; //separate the string by commas to create an array
    verdict = check(info , square); // call function to check if proposed square is already occupied
    return verdict;
}

// this function will get list of previous moves ,
// then concatenate the current move to it.
function recordMove(currentMove)  {
    var target = document.getElementById('boardState') ;
    var previousMoves =  target.innerHTML ;
    target.ennerHTML = previousMoves + currentMove ;
}

function checkForWinCon()  {
    var squareArray = [];
    var target = document.getElementById('boardState') ;
    var info = target.innerHTML ; // raw array with squares and avatars
    info = info.substring(1) ; // remove leading comma
    info.sort() ; // sort the square array in order despite the actual game play sequence
    for ( var i in info) {
        // new array with only squares (not avatars)
        squareArray.push(info[i].charAt(0)); 
}
// call the following array of functions to check for any of the possible win 
checkWinCon1 ( info, squareArray);
checkWinCon2 ( info, squareArray);
checkWinCon3 ( info, squareArray);
checkWinCon4( info, squareArray);
checkWinCon5( info, squareArray);
checkWinCon6( info, squareArray);
checkWinCon7 ( info, squareArray);
checkWinCon8 ( info, squareArray);
// consol.log("New CHECK: "document.getElementById("gameMsg").innerHTML ;
check4Tie();
}

// call this function to check boar state for any ties and act accordingly
function check4Tie()  {
        var boardState = document.getElementById("boardState").innerHTML ;
         // remove leading comma
       boardState = boardstate.substring(1);
         // separate the string by commas into an array
       boardState = boardState.split(',') ; 
      var check = document.getElementById("gameMsg").innerHTML;
      if (boardState.length >= 9  && check != "That's three ia a row, Player 1 wins ! " && check != "That's three in a row, Player 2 wins !")  {
          var txt1 = "Oh no ! Nobody wins,  it was a tie ! " ;
          tieSound() ; //play a sound when a tie ghas been detected
          writeMsg(txt1) ;
        setTimeout ( function() {
             stopGame() ;
             } , 3000) ;
      }
    }


    //whenever a win is detected the corresponding function will call this function to produce the following winning process for the game
function winner(windDetected, winCon)  {
    if  ( winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById("showPlayer").innerHTML ;
        var txt2 = "That's three in a row, " + activePlayer + " wins!!!!" ;
        writeMsg(txt2) ;
        var btn = document.getElementById("btnStart") ;
        startEnabled(btn) ; //enable the start button since the game is now stopped
        var btn = document.getElementById("btnStop") ;
        btnDisabled(btn) ; // disable the stop button since the game is now stopped
        document.getElementById("showPlayer").innerHTML = "Game Stopped";
        glowBoard(winCon) ; //call function to make the gameboard pulse with colors
    }
}

//this function will make the winning squares light up in celebration
function glowBoard(pos)  {
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var squares = document.getElementsByClassName("square") ;
    for (var i = 0 ; i < squares.length ; i++ )  {
        if (i == index0 )  {
            var bg1 = squares[i] ;
            blink( ) ;
            winSound( ) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 179, 66) "} , 100) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 235, 66) "} , 200) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(197, 244, 66) "} , 300) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(122, 244, 66) "} , 400) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(66, 244, 235) "} , 500) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 179, 66) "} , 600) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 235, 66) "} , 700) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(197, 244, 66) "} , 800) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(122, 244, 66) "} , 900) ;
            setTimeout(function() { bg1.style.backgroundColor = "rgb(66, 244, 235) "} , 1000) ;
            setTimeout(function() { bg1.style.backgroundColor = "#d7f3f7 ";} , 1100) ;
} else if (i == index1) {
        var bg2 = squares[i] ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(66, 244, 235)";}, 100 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(122, 244, 66)";}, 200 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(197, 244, 66)";}, 300 ) ;
            setTimeou(function() { bg2.style.backgroundColor = "rgb(244, 235, 66)";}, 400 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(244, 179, 66)";}, 500 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(66, 244, 235)";}, 600 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(122, 244, 66)";}, 700 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(197, 244, 66)";}, 800 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(244, 235,  66)";}, 900 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "rgb(244, 179,66)";}, 1000 ) ;
            setTimeout(function() { bg2.style.backgroundColor = "#d7f3f7";}, 1100 ) ;
} else if  ( i = index2 ) {
    var bg3 = squares[i] ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 179, 66) "} , 100) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 235, 66) "} , 200) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(197, 244, 66) "} , 300) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(122, 244, 66) "} , 400) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(66, 244, 235) "} , 500) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 179, 66) "} , 600) ;
     setTimeout(function() { bg1.style.backgroundColor = "rgb(244, 235, 66) "},700) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(197, 244, 66) "} , 800) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(122, 244, 66) "} , 900) ;
    setTimeout(function() { bg1.style.backgroundColor = "rgb(66, 244, 235) "} , 1000) ;
    setTimeout(function() { bg1.style.backgroundColor = "#d7f3f7 ";} , 1100) ;
     }
   }
}

//------------------------------------------------------------------------------
//These functions are the algorithms to find all win conditions
//------------------------------------------------------------------------------
// check for wincon squares 0, 1, 2
function checkwinCon1(info, squareArray)  {
    var winDetected = "on";
    var winCon1 = [0, 1, 2] ;
    //Iterate through the growing array during
    //gametime sarching for the existance of
    //index 0, index 1, and index 2...
    //and once they do appear in the array, 
    //record their avatars and compare all 3 for win cons
    for (var i in info)  {
        if (info[i].charAt(0) == "0")  {
            var match0Avatar = info[i].charAt(i) ; // only interested in recording the avatar ( X or O ) 
        }
        if (info[i].charAt(0) == "1")  {
            var match0Avatar = info[i].charAt(i) ;
        }
         if (info[i].charAt(0) == "2")  {
        var match0Avatar = info[i].charAt(i) ;
        }
}
// this will trigger (ONLY) if there was a match for index0, index1, and index2
if (match0Avatar != undefined && match1Avatar != undefined && match2Avatar !=undefined)  {
    if  (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
        winDetected ="win" ; // this flag will pass when a win has been detected
        winner(winDetected, winCon1) ;
        return ;
    }
}
winner(winDetected, winCon1) ;// winCon1 is the array of win combo
}

// checking for wincon squares 3, 4, 5
function CheckWinCon2 (info, squaresArray)  {
    var winCon2 = [3, 4, 5] ;
    var winDetected ="on" ;
    for (var i in info)  {
        if (info[i].charAt(0) == "3")  {
            var match0Avatar = info[i].charAt(i) ; // only interested in recording the avatar ( X or O ) 
        }
        if (info[i].charAt(0) == "4")  {
            var match0Avatar = info[i].charAt(i) ;
        }
         if (info[i].charAt(0) == "5")  {
        var match0Avatar = info[i].charAt(i) ;
        }
}
// this will trigger (ONLY) if there was a match for index3, index4, and index5
if (match3Avatar != undefined && matc4Avatar != undefined && match5Avatar !=undefined)  {
    if  (match3Avatar == match4Avatar && match3Avatar == match5Avatar) {
        winDetected ="win" ; // this flag will pass when a win has been detected
        winner(winDetected, winCon2) ;
        return ;
    }
}
winner(winDetected, winCon2) ;// winCon2 is the array of  win combo
}

// checking for wincon squares 6, 7, 8
function CheckWinCon3 (info, squaresArray)  {
    var winCon2 = [6, 7, 8] ;
    var winDetected ="on" ;
    for (var i in info)  {
        if (info[i].charAt(0) == "6")  {
            var match0Avatar = info[i].charAt(i) ; // only interested in recording the avatar ( X or O ) 
        }
        if (info[i].charAt(0) == "7")  {
            var match0Avatar = info[i].charAt(i) ;
        }
         if (info[i].charAt(0) == "8")  {
        var match0Avatar = info[i].charAt(i) ;
        }
}
// this will trigger (ONLY) if there was a match for index3, index4, and index5
if (match6Avatar != undefined && match7Avatar != undefined && match8Avatar !=undefined)  {
    if  (match6Avatar == match7Avatar && match6Avatar == match8Avatar) {
        winDetected ="win" ; // this flag will pass when a win has been detected
        winner(winDetected, winCon3) ;
        return ;
    }
}
winner(winDetected, winCon3) ;// winCon3 is the array of  win combo
}

// checking for wincon squares 6, 4, 2
function CheckWinCon2 (info, squaresArray)  {
    var winCon2 = [6, 4, 2] ;
    var winDetected ="on" ;
    for (var i in info)  {
        if (info[i].charAt(0) == "6")  {
            var match0Avatar = info[i].charAt(i) ; // only interested in recording the avatar ( X or O ) 
        }
        if (info[i].charAt(0) == "4")  {
            var match0Avatar = info[i].charAt(i) ;
        }
         if (info[i].charAt(0) == "2")  {
        var match0Avatar = info[i].charAt(i) ;
        }
}
// this will trigger (ONLY) if there was a match for index3, index4, and index5
if (match6Avatar != undefined && match4Avatar != undefined && match2Avatar !=undefined)  {
    if  (match6Avatar == match4Avatar && match6Avatar == match2Avatar) {
        winDetected ="win" ; // this flag will pass when a win has been detected
        winner(winDetected, winCon4) ;
        return ;
    }
}
winner(winDetected, winCon4) ;// winCon4 is the array of  win combo
}






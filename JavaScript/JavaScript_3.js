let game= document.getElementsByClassName("myGameList");
console.log(game);
let gameChoice= this.onclick.id

function Pick_Me(_gameChoice) {
   



    game[0]=document.getElementById("BattleZone");
    game[1]=document.getElementById("CrashBandicoot");
    game[2]=document.getElementById("OddWorld");
    game[3]=document.getElementById("GodOfWar");
    game[4]=document.getElementById("Joust");
    game[5]=document.getElementById("LittleBigPlanet");
    game[6]=document.getElementById("Defender");
    game[7]=document.getElementById("SpaceAce");
    game[8]=document.getElementById("SpaceInvaders");
    game[9]=document.getElementById("Centipede");
    game[10]=document.getElementById("MediEval");
   
    i= game.indexOf

switch (gameChoice) {

    case game[0]:
        if (game[0].id == "BattleZone"){
        document.getElementById("Video_Clip").innerHTML ="<iframe class='gameClip' autoplay controls src='https://www.youtube.com/embed/Ctr54kopo8I'><p>'The  browser is unable to  play the video clip at this time.'</p> </iframe>"};
        break;

    case game[1]:
        document.getElementById("Video_Clip").innerHTML = "<iframe class='gameClip' autoplay controls src='https://www.youtube.com/embed/PUr6JxzkzOc' >The browser is unable to  play the video clip.</iframe>";
        break;
    case game[2]:
        document.getElementById("Video_Clip").innerHTML ="<iframe autoplay controls src='https://www.youtube.com/embed/B8XTi2iWRY8' >The  browser is unable to  play the video clip at this time.</iframe>";
        break;






}
  
// when I did these if/else statements the BattleZone video would load and play, but none of the other options would work --so then i started trying the stuff up there (the code above this). Then I couldn't get anything to work and the error I get says that my Pick_Me function is  not defined...uggghhh! I was thinking that the switch/case method would work but now im not sure what to do...So I am stopping and asking for help because I am just making things worse!

   if  (game ="li#BattleZone.myGameList") {
    document.getElementById("Video_Clip").innerHTML ="<iframe class='gameClip' autoplay controls src='https://www.youtube.com/embed/Ctr54kopo8I'><p>'The  browser is unable to  play the video clip at this time.'</p> </iframe>"
   }
   
    else if (game="li#CrashBandicoot.myGameList") {
       document.getElementById("Video_Clip").innerHTML = "<iframe class='gameClip' autoplay controls src='https://www.youtube.com/embed/PUr6JxzkzOc' >The browser is unable to  play the video clip.</iframe>"
   }
   else if (game="li#OddWorld.myGameList") {
    document.getElementById("Video_Clip").innerHTML ="<iframe autoplay controls src='https://www.youtube.com/embed/B8XTi2iWRY8' ><p>'The  browser is unable to  play the video clip at this time.'</p>></iframe>"
    }
   else if (game="li#GodOfWar.myGameList") {
    document.getElementById("Video_Clip").innerHTML = "<iframe class= 'gameClip' autoplay controls src='https://www.youtube.com/embed/2Ga2Dtkg92I'><p>'The  browser is unable to  play the video clip at this time.'</p>></iframe>"
   }
   
    else if (game="li#Joust.myGameList") {
        document.getElementById("Video_Clip").innerHTML = "<iframe class= 'gameClip' autoplay controls src='https://www.youtube.com/embed/2Ga2Dtkg92I'><p>'The  browser is unable to  play the video clip at this time.'</p>></iframe>"
    }
        else if (game="li#Joust.myGameList") {
            document.getElementById("Video_Clip").innerHTML = "<iframe class= 'gameClip' autoplay controls src='https://www.youtube.com/embed/2Ga2Dtkg92I'><p>'The  browser is unable to  play the video clip at this time.'</p>></iframe>"
        }
    }
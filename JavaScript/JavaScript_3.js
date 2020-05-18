




var  gameChoice = this.onclick;
var vidClipArray = [

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/Ctr54kopo8I'><p>'The  browser is unable to  play the video clip at this time.'</p> </iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/PUr6JxzkzOc'  allow='accelerometer; autoplay;picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p> </iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/bLT-hCj8bTA?start=51' allow='accelerometer;autoplay;picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p></iframe>",

      "<iframe class='gamePlay' autoplay controls  src='https://www.youtube.com/embed/CsSA1sK2oNc?start=51' allow='accelerometer; autoplay; picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p></iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/-4l6_7FDtrk?start=51' allow='accelerometer; autoplay; picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p></iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/X-L80KM9gM8?start=18' allow='accelerometer; autoplay; picture-in-picture'>The  browser is unable to  play the video clip at this time</iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/Ctr54kopo8I'>The  browser is unable to  play the video clip at this time. </iframe>",  

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/FYKzlKZzGZc?' allow='accelerometer; autoplay;  picture-in-picture'>The  browser is unable to  play the video clip at this time.</iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/FnF_wy-G6DY?start=18' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'>The  browser is unable to  play the video clip at this time.</iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/Ctr54kopo8I' allow = 'accelerometer;autoplay;picture-in-picture'>The  browser is unable to  play the video clip at this time </iframe>",

      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/xrd8rniZYP8?' allow='accelerometer; autoplay; picture-in-picture'>'The  browser is unable to  play the video clip at this time.'</iframe>",


      "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/TXoDaas4XYM?' allow='accelerometer; autoplay; picture-in-picture'>'The  browser is unable to  play the video clip at this time.</iframe>",
];








function PickedOnClick() {

  gameChoice = document.getElementsById


  console.log(gameArray.length);
  console.log(vidClipArray.length);

 var gameVid = function() {
    var x =  game.findIndex(gameChoice);
    var y =  x;
    document.getElementById("Video_Clip").innerHTML = vidClip[y];
};
 
  
  switch (gameChoice) {
    case "0_BattleZone":
      document.getElementById("0_BattleZone").addEventListener("click", gameVid());
      
       break;
    case "1_CrashBandicoot":
        document.getElementById("Video_Clip").innerHTML = game[1];
        break;
    case  "2_OddWorld":
        document.getElementById("Video_Clip").innerHTML = gameClip[2];
        break;
    case  "3_GodOfWar":
        document.getElementById("Video_Clip").innerHTML = gameClip[3];
        break;
    case "4_Joust":
        document.getElementById("Video_Clip").innerHTML = gameClip[4];
        break;
    case  "5_LittleBigPlanet":
         document.getElementById("Video_Clip").innerHTML = gameClip[5];
         break;
    case  "6_Defender":
        document.getElementById("Video_Clip").innerHTML = gameClip[6];
        break;
    case  "7_DragonsLair":
        document.getElementById("Video_Clip").innerHTML = gameClip[7];
        break;
    case  "8_DigDug":
       document.getElementById("Video_Clip").innerHTML = gameClip[8];
       break;
    case  "9_QBert":
        document.getElementById("Video_Clip").innerHTML = gameClip[9];
        break;
    case  "10_MediEvil":
        document.getElementById("Video_Clip").innerHTML = gameClip[10];
        break;
   default:
   document.getElementById("Error").innerHTML = "Please come back later...the site is having routine maintenance services at this time. We apologize for this inconvenience."
  }

}


 
// when I did these if/else statements the BattleZone video would load and play, but none of the other options would work --so then i started trying the stuff up there (the code above this). Then I couldn't get anything to work and the error I get says that my Pick_Me function is  not defined...uggghhh! I was thinking that the switch/case method would work but now im not sure what to do...So I am stopping and asking for help because I am just making things worse!

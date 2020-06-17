


function PickedOnClick(clicked_id) {
    var vidClip = [

        "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/Ctr54kopo8I'><p>'The  browser is unable to  play the video clip at this time.'</p> </iframe>",
    
        "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/PUr6JxzkzOc'  allow='accelerometer; autoplay;picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p> </iframe>",
    
        "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/bLT-hCj8bTA?start=51' allow='accelerometer;autoplay;picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p></iframe>",
    
        "<iframe class='gamePlay' autoplay controls  src='https://www.youtube.com/embed/CsSA1sK2oNc?start=51' allow='accelerometer; autoplay; picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p></iframe>",
    
        "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/-4l6_7FDtrk?start=51' allow='accelerometer; autoplay; picture-in-picture'><p>'The  browser is unable to  play the video clip at this time.'</p></iframe>",
    
        "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/X-L80KM9gM8?start=18' allow='accelerometer; autoplay; picture-in-picture'>The  browser is unable to  play the video clip at this time</iframe>",
    
        "<iframe class='gamePlay' autoplay controls src='https://www.youtube.com/embed/FYKzlKZzGZc?' allow='accelerometer; autoplay;  picture-in-picture'>The  browser is unable to  play the video clip of  Space Ace  at this time.</iframe>",
    
        "<iframe class='gamePlay' controls src='https://www.youtube.com/embed/FnF_wy-G6DY?start=21&end=2:41;autoplay=1'>The  browser is unable to  play the video clip of  Dig Dug  at this time.</iframe>",
    
       "<iframe class='gamePlay' src='https://www.youtube.com/embed/nAcFObAQRf4'  allow='autoplay; controls'>The browser is unable to play the video clipof Q*Bert at this time.</iframe>",
    
       "<iframe class='gamePlay'  src='https://www.youtube.com/embed/VElLWeBuFUw'>This browser is unable to play the video clip of MediEvil at this time.</iframe>",
    
    ];
    var marquee = "Now Showing : ";
    
    switch (clicked_id) {

        case "0_BattleZone":
            document.getElementById("Now_Playing").innerHTML = marquee + "Battle Zone";
            document.getElementById("videoPlayer").innerHTML = vidClip[0];
            break;
        case "1_CrashBandicoot":
            document.getElementById("Video_Clip").innerHTML = vidClip[1];
            break;
        case "2_OddWorld":
            document.getElementById("Video_Clip").innerHTML = vidClip[2];
            break;
         case "3_Joust":
            document.getElementById("Video_Clip").innerHTML = vidClip[3];
            break;
        case "4_LittleBigPlanet":
            document.getElementById("Video_Clip").innerHTML = vidClip[4];
            break;
        case "5_Defender":
            document.getElementById("Video_Clip").innerHTML = vidClip[5];
            break;
        case "6_SpaceAce":
            document.getElementById("Video_Clip").innerHTML = vidClip[6];
            break;
        case "7_DigDug":
            document.getElementById("Video_Clip").innerHTML = vidClip[7];
            break;
        case "8_QBert":
            document.getElementById("Video_Clip").innerHTML = vidClip[8];
            break;
        case "9_MediEvil":
            document.getElementById("Video_Clip").innerHTML = vidClip[9];
            break;
        case "10_Katamari":
            document.getElementById("Video_Clip").innerHTML = vidClip[10];
            break;
        default:
            document.getElementById("oops").innerHTML = "What we have here,... is a failure to communicate! Houston! We have a problem!! We apologize for this unexpected interruption of our regularly scheduled content.";
    }
}













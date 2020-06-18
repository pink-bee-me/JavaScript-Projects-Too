


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

        case "BattleZone_0":
            document.getElementById("Now_Playing").innerHTML = marquee + "Battle Zone";
            document.getElementById("videoPlayer").focus();
            document.getElementById("videoPlayer").innerHTML = vidClip[0];
            break;
        case "CrashBandicoot_1":
            document.getElementById("Video_Clip").innerHTML = vidClip[1];
            break;
        case "OddWorld_2":
            document.getElementById("Video_Clip").innerHTML = vidClip[2];
            break;
         case "Joust_3":
            document.getElementById("Video_Clip").innerHTML = vidClip[3];
            break;
        case "LittleBigPlanet_4":
            document.getElementById("Video_Clip").innerHTML = vidClip[4];
            break;
        case "Defender_5":
            document.getElementById("Video_Clip").innerHTML = vidClip[5];
            break;
        case "SpaceAce_6":
            document.getElementById("Video_Clip").innerHTML = vidClip[6];
            break;
        case "DigDug_7":
            document.getElementById("Video_Clip").innerHTML = vidClip[7];
            break;
        case "QBert_8":
            document.getElementById("Video_Clip").innerHTML = vidClip[8];
            break;
        case "MediEvil_9":
            document.getElementById("Video_Clip").innerHTML = vidClip[9];
            break;
        case "Katamari_10":
            document.getElementById("IFRAME_INSERT").innerHTML = vidClip[10];
            break;
        default:
            document.getElementById("oops").innerHTML = "What we have here,... is a failure to communicate! Houston! We have a problem!! We apologize for this unexpected interruption of our regularly scheduled content.";
    }
}













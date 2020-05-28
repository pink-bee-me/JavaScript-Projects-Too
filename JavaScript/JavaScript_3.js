var vidClip = [

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


function PickedOnClick(clicked_id) {

    switch (clicked_id) {

        case "0_BattleZone":
            document.getElementsById("videoPlayer").innerHTML = vidClip[0];
            break;
        case "1_CrashBandicoot":
            document.getElementsById("videoPlayer").innerHTML = vidClip[1];
            break;
        case "2_OddWorld":
            document.getElementsById("videoPlayer").innerHTML = vidClip[2];
            break;
         case "3_Joust":
            document.getElementsById("videoPlayer").innerHTML = vidClip[3];
            break;
        case "4_LittleBigPlanet":
            document.getElementsById("videoPlayer").innerHTML = vidClip[4];
            break;
        case "5_Defender":
            document.getElementsById("videoPlayer").innerHTML = vidClip[5];
            break;
        case "6_SpaceAce":
            document.getElementsById("videoPlayer").innerHTML = vidClip[6];
            break;
        case "7_DigDug":
            document.getElementsById("videoPlayer").innerHTML = vidClip[7];
            break;
        case "8_QBert":
            document.getElementsById("videoPlayer").innerHTML = vidClip[8];
            break;
        case "9_MediEvil":
            document.getElementsById("videoPlayer").innerHTML = vidClip[9];
            break;
        case "10_Katamari":
            document.getElementsById("videoPlayer").innerHTML = vidClip[10];
            break;
        default:
            document.getElementById("oops").innerHTML = "What we have here,... is a failure to communicate! Houston! We have a problem!! We apologize for this unexpected interruption of our regularly scheduled content.";
    }
}













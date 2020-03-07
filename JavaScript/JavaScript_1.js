function Selection_Random() {

var playedTrack = [];
const audioTrack = [".\Audio\Lana_Del_Rey_Mariners_Apartment_Complex mp3",
                    ".\Audio\_Cry Me A River 2.mp3"];
const title = ["Mariners Apartment Complex", "Cry Me A River",];
const artist = ["Lana Del Rey", "Justin Timberlake"];


Start:
for (let i = 0; i < audioTrack.length;) {
    function selection_Random(){
        pick = audioTrack[Math.floor(Math.random() * audioTrack.length)];
    
        indexOfPick =  audioTrack.indexOf(pick);  // finding index of the pick
        removedPick = audioTrack.splice(indexOfPick,1);//removing the pick from the audioTracks array so that you can not have a duplicate random pick
        console.log(pick);
        console.log(removedPick);
    }
    
    var musicPicks = document.getElementById("audio_track").innerHTML = pick;

    var playPicks = document.getElementById("music");
    
    function Play_That_Tune() {
        musicPicks.play();
    }
    function Pause_That_Tune() {
        musicPicks.pause();
    }
     playedTrack.push[removedPick];
    

function Get_Guess() {
 var guess = document.getElementById("Lucky_Guess").value;

function Get_Your_Results() {

    if (guess == playedTrack.title) {
     document.getElementById("And_The_Answer_Is").innerHTML = "Way Cool!!!! You Are Correct!!! You absolutely crushed it and were able to NAME THAT TUNE!!!";}
     else {
         document.getElementById("And_The_Answer_Is").innerHTML = "OOPS!!! I'm sorry... That is NOT the Name Of That Tune!!!"
     }
     document.getElementById("Name_Of_Track").innerHTML = "Title: " + playedTrack.title;
     document.getElementById("Name_Of_Artist").innerHTML = "Performing Artist: " + playedTrack.artist;

     function Stop_Play() {
        if ( MouseEvent.click = true) {
        break

 function Continue_Play() {
    
     document.getElementById("Play_Again").innerHTML = "Alright!!!... Go Back to the Random Pick button and Let's Do This!!!!";
     i++;
 if (onclick = true,)
{continue:Start
}   
    i++
}
}
 }}}}}
var audio_info = document.getElementById("audio1");
audio_info.addEventListener('playing', function Play_That_Tune() {
    console.log("Audio Track PLAY initiated...");
    console.log("Audio Track START position: " + e.target.currentTime + " seconds");
    },false);
audio_info.addEventListener('pause', function Pause_That_Tune() {
    console.log("Audio Track playback PAUSE position: " + e.target.currentTime + " seconds");},false);
audio_info.addEventListener("ended", function End_Of_Tune(){
    console.log("Audio Track Playback Complete");
    console.log("Audio Track END position: " + e.target.currentTime + " seconds")
}, false);








function Play_That_Tune() {
    musicPicks.play();
}
function Pause_That_Tune() {
    musicPicks.pause();
}
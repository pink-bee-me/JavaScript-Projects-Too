function setupCanvas() {
// canvas element with text and linear gradient
let myCanvas = document.getElementById("myCanvas"); //create canvas via  DOM
let  gContext = myCanvas.getContext("2d"); //2d context 
let myGradient = gContext.createLinearGradient(10,10,750,80); //(x-axis, y-axis, width, height)

myGradient.addColorStop(0,'#82c3c3'); //first color stop of gradient
myGradient.addColorStop(1,'#4141c3'); //second color stop of gradient
gContext.fillStyle = myGradient;
gContext.fillRect(10,10,440,80);
textInCanvas();
}
function textInCanvas(){
let myCanvas2 = document.getElementById("myCanvas");
let gContext = myCanvas2.getContext("2d");
gContext.font = "22px Ariel Bold"; //font of fillText
gContext.fillStyle = '#111212';
gContext.fillText("It's time for The Annual Favorite Actor Poll !!!",20,55)
}

 
setupCanvas();

 function submitFav() { 

    let favActor = document.getElementById("Choice").value;

    let favOutput  = `${favActor} !  Wow! What a great pick! We love him too!`;
   
    let errorNotValid = "Please pick an actor from the list above ( You might need to check your spelling too!). ";
   
    let response =  undefined;
  
    let thankYouNote = " Thank you for taking the time to participate in our  Annual Favorite Actor Poll... Be sure and check back in to see which actor  'takes the cake' !!! Have a great Day.. and don't forget, Your Voice Really Does Matter, so Let It Be Heard !!! ";
    

switch (favActor) { 
  case "Keanu Reeves":
  case "Clint Eastwood":
  case "Jack Nicholson":
  case "Morgan Freeman":
  case "Tom Hanks":
  case "Denzel Washington":
  case "Leonardo DiCaprio":
  case "Gene Hackman":
        response = favOutput;
        document.getElementById("PollComplete").innerHTML =  response;
        document.getElementById("goButton")
        .addEventListener("click",
         function(){
   let error1 = document.getElementById("OutputError").value;
   let error2 = document.getElementById("OutputError2").value;
  error1.hidden = true;
  error2.hidden =true;
         });
        document.getElementById("ThankYou").innerHTML = thankYouNote ;
        break;
  
  default:
        response = errorNotValid;
         document.getElementById("OutputError").innerHTML =  response
    document.getElementById("OutputError2").innerHTML = "Let's Try That One More Time....";


              }
            }

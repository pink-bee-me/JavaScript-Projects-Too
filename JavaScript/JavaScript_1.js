//canvas element with text and such
var c = document.getElementById("myCanvas");
var ctx= c.getContext("2d");
ctx.font= "26px Ariel";
ctx.fillText("Your Voice Matters!!!...please participate in our Favorite Actor Poll!",10,50);


//create gradient
//var grd = ctx.createLinearGradient(0,0,200,0);
//grd.addColorStop(0, "purple");
//grd.addColorStop(1, "white");
//fill with gradient
//ctx.fillStyle = grd;
//ctx.fillRect(10,10,150,80);


var default_Info;
var Actor_String = " is a great actor!!!";
var error_Response = "OOPS!!! That wasn't one of the options that are available... PLEASE Look At The List again and Re-Enter your Pick For Favorite Actor.";


var Actors2;
var Actors2A = ''; 
var A = [];
   

function Actor_Function() { 
    var Actors = document.getElementById("Actor_Choice1").value;
    

        switch(Actors || Actors2A){ 
            case "Keanu Reeves":
            Actor_Output = Actors + Actor_String;
            break;
            case "Clint Eastwood":
            Actor_Output = Actors + Actor_String;
            break;
            case "Jack Nicholson":
            Actor_Output = Actors + Actor_String;
            break;
            case "Morgan Freeman":
            Actor_Output = Actors + Actor_String;
            break;
            case "Tom Hanks":
            Actor_Output = Actors + Actor_String;
            break;
            case "Denzel Washington":
            Actor_Output = Actors + Actor_String;
            break;
            case "Leonardo DiCaprio":
            Actor_Output = Actors + Actor_String;
            break;
            case "Gene Hackman":
            Actor_Output = Actors + Actor_String;
            break;
            default:
            Actor_Output = error_Response;
        }

     if (Actor_Output == Actors + Actor_String) {

         document.getElementById("Output").innerHTML = Actors + Actor_String;
             document.getElementById("End").innerHTML = "That Was Fun!!! Thank you.";
         
        } 

    
    

    else {

        document.getElementById("Output2").innerHTML = error_Response;

        A = document.getElementsByClassName("Instruction");
        var choose = "Choose Your FAVORITE Actor from the list: ";
        var enter = "Enter your choice below: ";
 
        A[0].innerHTML = "<p style ='color:#red;'>" + choose.bold() +"</p>";
        A[1].innerHTML ="<p></p>";
        A[2].innerHTML = "<p style ='color:red;'>" + enter.bold() + "</p>";
       
        
            var another_Chance = "<input id='Actor_Choice2' type='text'></input>";
            var ReDo_Button = "<button onclick='Actors2()'>Click Here To Re-Submit Your Choice</button>";
        
            document.getElementById("Second_Chance").innerHTML = another_Chance;
            document.getElementById("ReDo").innerHTML = ReDo_Button;
        
                Actors2 = function() {
                     Actors = document.getElementById("Second_Chance").value;
            
                    
                     Actor_Function();

                        if (Actor_Output == (Actors + Actor_String)) {

                                document.getElementById("Output3").innerHTML = "Wow!!! " + Actors + "!!!! That's our FAVORITE TOO!!!";

                                document.getElementById("End").innerHTML = "We appreciate your participation. Thank You!!!"; 
                            }

                        else {

                                document.getElementById("Output4").innerHTML = "Thank You for Your Input! We will take your suggestion into consideration...<br> Who Knows???<br><br> ...maybe, " + Actors +" will be on the NEXT Edition Of Our FAVORITE ACTORS LIST!!!<br><br>Thank you for your time and thoughtful contribution...GOOD-BYE!!!"; 
                            }
                        
                        
                }
        }
    }

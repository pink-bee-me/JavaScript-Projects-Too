var Actors = document.getElementById("Actor_Choice1").value;
var default_Info;
var Actor_String = " is a great actor!!!";
var error_Response = "Would you please choose an actor for the list above (...and maybe, check your spelling too - Thank you )."; 

var choose = "Choose Your FAVORITE Actor from the list: ";
var enter = "Enter your choice below: ";
var Actors2; 
var A = [];
   

function Actor_Function() { 

        switch(Actors || Actors2){ 
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
            Actor_Output = Actors+ Actor_String;
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

     if (Actor_Output == (Actors + Actor_String)) {

         document.getElementById("Output").innerHTML = Actor_Output;
         document.getElementById("End").innerHTML = "That Was Fun!!!";
         
        } 

    
    

    else {
        document.getElementById("Output2").innerHTML = error_Response;

        A = document.getElementsByClassName("Instruction");
 
        A[0].innerHTML = "<p style = color:'red';>" + choose.bold() + "</p>";
        A[1].innerHTML = "<p style = color:'red'>" + enter.bold() + "</p>";
       
        {
        var another_Chance = "<input id='Actor_Choice2' type='text'></input>";
        var ReDo_Button = "<button onclick='Actors2()'>Click Here To Re-Submit Your Choice</button>";
        
        document.getElementById("Second_Chance").innerHTML = another_Chance;
        document.getElementById("ReDo").innerHTML = ReDo_Button;

        Actors2 = function() {
            Actors = document.getElementById("Actor_Choice2").value;
            Actor_Function();
            if (Actor_Output == (Actors + Actor_String))  {
                document.getElementById("Output3").innerHTML = "Wow!!! "
                 + Actors + "!!!! That's our FAVORITE TOO!!!";
                document.getElementById("End").innerHTML = "We appreciate your participation. Thank You!!!"; 
            
                   }
        
    }
}
}
}
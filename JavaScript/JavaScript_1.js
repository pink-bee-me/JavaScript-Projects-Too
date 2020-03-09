function Actor_Function() {
    var Actor_Output;
    var Actors = document.getElementById("Actor_Choice").value;
    var Actor_String = " is a great actor!!!";
    var Go = function(){
        var A = document.getElementsByClassName("Instruction");
        A[0].innerHTML = "<strong>Choose your favorite actor from the list below:</strong>" 
        A[1].innerHTML = "<strong>Enter your choice below:</strong>";
        };

   
    switch(Actors) {
        case "Keanu Reeves":
        Actor_Output = "Keanu Reeves" + Actor_String;
        break;
        case "Clint Eastwood":
        Actor_Output = "Clint Eastwood" + Actor_String;
        break;
        case "Jack Nicholson":
        Actor_Output = "Jack Nicholson" + Actor_String;
        break;
        case "Morgan Freeman":
        Actor_Output = "Morgan Freeman" + Actor_String;
        break;
        case "Tom Hanks":
        Actor_Output = "Tom Hanks" + Actor_String;
        break;
        case "Denzel Washington":
        Actor_Output = "Denzel Washington" + Actor_String;
        break;
        case "Leonardo DiCaprio":
        Actor_Output = "Leonardo DiCaprio" + Actor_String;
        break;
        case "Gene Hackman":
        Actor_Output = "Gene Hackman" + Actor_String;
        break;
        default:
        Actor_Output = "Although many are 'GREAT',... Please choose one from the list provided (check your spelling,please)."
    
    ;

    if (Actors_Output = "Although many are 'GREAT',... Please choose one from the list provided (check your spelling,please).") {
    document.getElementById("ReDo").innerHTML = Go;

    
    }
}
}

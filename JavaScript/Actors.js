

     if (Actor_Output == (Actors + Actor_String)) {

         document.getElementById("Output").innerHTML = Actors + Actor_String;
         document.getElementById("End").innerHTML = "That Was Fun!!! ThankYou for Participating in The Favorite Actor Poll!!!";
         
    } 
    else {

        document.getElementById("Output2").innerHTML = error_Response;

        A = document.getElementsByClassName("Instruction");
 
        A[0].innerHTML = "<p style ='color:red;'>" + choose.bold() +"</p>";
        A[2].innerHTML = "<p style ='color:red;'>" + enter.bold() + "</p>";
       
        {
            var another_Chance = "<input id='Actor_Choice2' type='text'></input>";
            var ReDo_Button = "<button onclick='secondChance()'>Click Here To Re-Submit Your Choice</button>";
        
            document.getElementById("Second_Chance").innerHTML = another_Chance;
            document.getElementById("ReDo").innerHTML = ReDo_Button;
    

          
                   
                var Actor = document.getElementById("Actor_Choice2").value;

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
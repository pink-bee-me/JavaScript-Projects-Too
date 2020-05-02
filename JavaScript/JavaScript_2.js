



function validate() {
    let userContactData =[];
         userContactData = document.getElementsByClassName("contactData");
         userContactData[0] = document.getElementById("fname").value;
         userContactData[1] = document.getElementById("lname").value;
         userContactData[2] =document.getElementById("email").value;
 


   

        for (let i =0; i > userContactData.length; i++) {
        let x  =  userContactData.indexOf("");
        console.log(userContactData[i]);
        if (x !== -1 ){
            alert("Please Check that All Input Fields Have Been Completed. ")
        }
       return true
    } 
     } 
        
     
//Function to generate the password
function createPassword() {
    var password = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var symbol = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";
    var length = document.getElementById('length').value;
    var temp = "";

    ////checking if checkboxes are checked and do accordingly
    var isChecked = document.getElementsByTagName("input"), count = 0;
    for (var i = 0; i < isChecked.length; i++) {
        if (isChecked[i].type == "checkbox" && isChecked[i].checked === true) {
            count++;
            
            //storing the values of checkbox those who are checked, in an array 
            const checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.id);
            });
            //adding the values of selected checkboxes in a temporary variable
            for (i = 0; i < values.length; i++) {
                if (values[i] == "numbers") {
                    temp += number;
                } else if (values[i] == "symbols") {
                    temp += symbol;
                } else if (values[i] == "upper-case") {
                    temp += upper;
                } else {
                    temp += lower;
                }
            }
        
            
            //Randomizing the password
            for ( i = 0; i < length; i++) {
                password += temp.charAt(Math.floor(Math.random() * temp.length));
            }

            //displaying the password
            document.getElementById('result').innerHTML = "The password generated is: " + password;

        } else {
            document.getElementById('result').innerHTML = "!Please check at least one checkbox.";
        }

    }

}
//function to uncheck all the checkboxes
function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
    document.getElementById('result').innerHTML = "";
    selectTags = document.getElementsByTagName("select");
    for(var i = 0; i < selectTags.length; i++) {
        selectTags[i].selectedIndex =0;   
        
    }  
    

}

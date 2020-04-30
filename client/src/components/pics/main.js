
// Formulär 

var formInfo = document.forms.formInfo;
var message = document.getElementById("message");

formInfo.onsubmit = function () { 
    
    if (formInfo.fNamn.value == "") {
        message.innerHTML = "Vänligen fyll i förnamn"; 
        return false; 
    
    } if (formInfo.eNamn.value == "") {
            message.innerHTML = "Vänligen fyll i efternamn"; 
            return false;
    
    } if (formInfo.mail.value == "") {
        message.innerHTML = "Vänligen fyll i email"; 
        return false;
    
    } if (mail.indexOf ("@") > -1) {
        alert("Vänligen fyll i giltig mejladress")
            
    } else {
        message.innerHTML = ""; 
        return true;
    }
};


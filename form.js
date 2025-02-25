/*document.getElementsById("submit").onClick = function() {validateForename()};

function validateForename() {
    let x = document.forms["firstname"].value;
    if (x == "") {
        alert("Please fill out required fields");
        return false
    }
}

validateForename()*/

function validateForm() {
    const fName = document.getElementById("fname").value;
    const sName = document.getElementById("sname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;

    const fNameErr = document.getElementById("fname-error")
    const sNameErr = document.getElementById("sname-error")
    const emailError = document.getElementById("email-error")
    const subjectErr = document.getElementById("subject-error")

    fNameErr.textContent = ""; 
    sNameErr.textContent = ""; 
    emailError.textContent = "";
    subjectErr.textContent = ""; 
}
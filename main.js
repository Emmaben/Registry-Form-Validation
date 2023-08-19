// get elements from the Dom
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const eMail = document.getElementById("email");

console.log(fullName.value);

// Add Event Listeners 
fullName.addEventListener("blur", validateFullName());

// Create Validation Function 
function validateFullName(){
    const regEx_FullName = /^[a-zA-Z]{2,20}( ) [a-zA-Z]{2,20}$/;


    if (!regEx_FullName.test(fullName.value)) {
        // fullName.classList.add("notValid");
        // fullName.classList.remove("Valid");
        console.log("notvalid")
    } else {
        // fullName.classList.remove("notValid");
        // fullName.classList.add("Valid");
        console.log("valid")
    }
}
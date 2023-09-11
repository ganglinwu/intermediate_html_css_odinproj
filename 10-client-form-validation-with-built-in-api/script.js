const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('#email + span.error');

form.addEventListener("submit", (e)=> {
    if (!emailInput.validity.valid) {
        // if emailInput is invalid
        showError(); 
        // show the error message
        e.preventDefault();
        // prevent form submission
    }
    // else submit form
});

emailInput.addEventListener('input', (e)=>{
    if (emailInput.validity.valid) {
        // if emailInput is valid
        
        errorMsg.textContent = ""
        // clear error message
        
        errorMsg.className = 'error'
        // reset visual state of message
    } else {
        showError();
    }
});


function showError() {
    if (emailInput.validity.valueMissing) {
        // if input is empty

        errorMsg.textContent = 'Please enter an email address.'
    } else if (emailInput.validity.typeMismatch) {
        // if input is not of type email

        errorMsg.textContent = "What you have entered does not seem to be an email address."
    } else if (emailInput.validity.tooShort) {
        // if the input does not meet minLength

        errorMsg.textContent = `Email should be at least ${emailInput.minLength} characters;
        you entered ${emailInput.value.length} characters.`;

        errorMsg.className = 'error active';
        // set styling
    }
}
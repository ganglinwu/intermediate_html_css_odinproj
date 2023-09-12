const pw1 = document.querySelector('#pw1')
const pw2 = document.querySelector('#pw2')
const form = document.querySelector('form')


function passwordMatch() {
    if (pw1.textContent == pw2.textContent) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit' (e)= {
    
    if () {
        // if form is valid

    } else {
        // if form is invalid
        e.preventDefault();
    }


})

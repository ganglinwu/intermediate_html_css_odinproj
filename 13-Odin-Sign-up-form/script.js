const pw1 = document.querySelector('#pw1')
const pw2 = document.querySelector('#pw2')
const form = document.querySelector('form')



function passwordMatch() {
    if (pw1.value == pw2.value) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', validateForm)

function validateForm(e) {
    const form = e.target;

    if (form.checkValidity()) {
        Array.from(form.elements).forEach(i=> {
            i.parentElement.classList.remove('invalid');
        })
    } else {
        e.preventDefault();
        
        Array.from(form.elements).forEach(i=> {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            } else {
                i.parentElement.classList.add('invalid');
            }
        });
    } 
    if (!passwordMatch()) {
        pw1.parentElement.classList.add('invalid');
        pw2.parentElement.classList.add('invalid');
        e.preventDefault();
    } else {
        pw1.parentElement.classList.remove('invalid');
        pw2.parentElement.classList.remove('invalid');
    }
}

Array.from(form.elements).forEach(i=> {
    i.addEventListener('input', (e)=> {
        if (i.checkValidity()) {
            i.classList.remove('incorrect');
        } else {
            i.classList.add('incorrect');
        }
    })
})
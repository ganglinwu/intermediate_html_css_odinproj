const pw1 = document.querySelector('#pw1')
const pw2 = document.querySelector('#pw2')
const form = document.querySelector('form')
const button = document.querySelector('button')



function passwordMatch() {
    if (pw1.value == pw2.value) {
        return true
    } else {
        return false
    }
}

button.addEventListener('click', validateForm)

function validateForm(e) {
    const form = e.target.form;
    let displayAlert = false;

    if (form.checkValidity()) {
        Array.from(form.elements).forEach(i=> {
            i.parentElement.classList.remove('invalid');
        })
        if (!pw1.value) {
            pw1.parentElement.classList.add('empty');
        } else {
            pw1.parentElement.classList.remove('empty');
            
            if (!passwordMatch()) {
                pw1.parentElement.classList.add('invalid');
                pw2.parentElement.classList.add('invalid');
                e.preventDefault();
                displayAlert = false;
            } else {
                pw1.parentElement.classList.remove('invalid');
                pw2.parentElement.classList.remove('invalid');
                displayAlert = true;
            }
        }
    } else {
        e.preventDefault();
        displayAlert = false;
        
        Array.from(form.elements).forEach(i=> {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            } else {
                i.parentElement.classList.add('invalid');
            }
        });
    } 
    (displayAlert) ? alert('Form looks good! It has been \'submitted\'') : e.preventDefault();
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
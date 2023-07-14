const myform = document.getElementById('myform');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;
    if (form.checkValidity()) {

    } else {
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            } else {
                i.parentElement.classList.add('invalid');
            }
        });
        if (this.classList.contains('invalid'));
        alert("Please fill out required fields");
    }
};

myform.addEventListener('focusout', validateFocusOut);
myform.addEventListener('blur', validateFocusOut);

function validateFocusOut(e) {
    const input = e.target;
    if (input.checkValidity()) {

    } else {
        e.preventDefault();
        if (input.checkValidity()) {
            input.parentElement.classList.remove('invalid');
        } else {
            input.parentElement.classList.add('invalid');
        }
    }
}

function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    // if (password1 == '')
    // alert("Please enter your password");
    // else if (password2 == '')
    // alert("Please confirm your password")

    if (password1 != password2) {
        alert("Passwords do not match")
        return false;
    }
    else {
        // alert("Passwords match")
        return true;
    }
}
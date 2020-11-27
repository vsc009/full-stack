//Selector
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var message = document.querySelector("small");

//Event Handler
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInput();
});

//Functions
function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        showError(username, "Username cannot be blank");
    } else if (!isUsernameValid(usernameValue)) {
        showError(username, "Username is not valid");
    } else {
        showSuccess(username);
    }

    if (emailValue === "") {
        showError(email, "Email cannot be blank");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email is not valid");
    } else {
        showSuccess(email);
    }

    if (password1Value === "") {
        showError(password1, "Password1 cannot be blank");
    } else {
        showSuccess(password1);
    }

    if (password2Value === "") {
        showError(password2, "Password2 cannot be blank");
    } else if (password2Value != password1Value) {
        showError(password2, "Passwords do not match");
    } else {
        showSuccess(password2);
    }
}

function showError(input, message) {
    const formControl = input.parentNode;
    formControl.className = "form-container error";
    const small = formControl.querySelector("small");
    small.innerHTML = message
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-container success";
}

function isEmailValid(email) {
    return /^([A-Za-z0-9\.\-\_]+)@([A-Za-z0-9]+)\.([A-Za-z]{2,3})$/.test(email);
}

function isUsernameValid(username) {
    return /^([a-z0-9]+)$/.test(username);
}
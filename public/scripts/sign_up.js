function validateForm() {
    let signUpForm = document.forms["sign-up-form"]
    let username = signUpForm.username.value;
    let password = signUpForm.password.value;
    let passwordConf = signUpForm.password_confirm.value;

    let formHelper = document.getElementById('form-helper');

    if (username == "") {
        formHelper.innerHTML = "Username Cannot Be blank";
        return false;
    }
    else if (password == "" || passwordConf == "") {
        formHelper.innerHTML = "Password cannot be blank";
        return false;
    }
    else if (password != passwordConf) {
        formHelper.innerHTML = "Passwords Must Match";
        return false;
    }
    return true;
}

console.log(document.forms["sign-up-form"]["username"]);
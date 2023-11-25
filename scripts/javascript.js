/*function password_updated1() {
    password1 = password.value;
    if ( password1 != "" && password2 != "") {
        password_check();
    }
}
function password_updated2() {
    password2 = password_repeat.value;
    if ( password1 != "" && password2 != "") {
        password_check();
    }
}*/
/*function passowrd_nonvuoto() {
    if ( password1 != "" && password2 != "" ) {
        password_check();
    }
}
function password_updated() {
    if ( password.value != "" ) {
        password1 = password.value;
        passowrd_nonvuoto();
    }
    else if ( password_repeat.value != "" ) {
        password2 = password_repeat.value;
        passowrd_nonvuoto();
    }
}
function password_check() {
        if (password1 == password2) {
            console.log(password1 + " true");
            console.log(password2 + " true");
        }
        else {
            console.log(password1 + " false");
            console.log(password2 + " false");
        }
}*/
/*function password_updated() {
    password_repeat.addEventListener("input", function(e) {
    password1 = password.value;
    password2 = password_repeat.value;
});
    password_check();
}*/
let password = document.querySelector("#password");
let password_repeat = document.querySelector("#password_repeat");
password_repeat.addEventListener("input", function(e) {
    let password1 = document.querySelector("#password").value;
    let password2 = document.querySelector("#password_repeat").value;

    if (password1 == password2) {
        console.log(password1 + " true");
        console.log(password2 + " true");
    }
    else {
        console.log(password1 + " false");
        console.log(password2 + " false");
    }
});
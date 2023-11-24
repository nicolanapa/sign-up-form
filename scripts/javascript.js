let password1 = "";
let password2 = "";

function password_check() {
    let password = document.querySelector("#password");
    let password_repeat = document.querySelector("#password_repeat");
    password.addEventListener("keypress", function(e) {
    return password1 = password;
    });
    password_repeat.addEventListener("keypress", function(e) {
    return password2 = password_repeat;
    });
    if (password1 == password2) {
        console.log(password1);
        console.log(password2);
    }
    else {
        console.log(password1);
        console.log(password2);
    }
}



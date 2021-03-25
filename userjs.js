let GoAuth = document.getElementById('ChInBtn').addEventListener('click', OpenAuth);

function OpenAuth () {
    document.location.href ="authform.html"
}

let Uname;
let Upassword;

document.forms.AuthForm.onsubmit = function () {
    let Uname = this.email.value;
    let Upassword = this.password.value;
    localStorage.setItem (Uname, Upassword);
    document.location.href = "index.html";
    return false;
}

let GoAuth = document.getElementById('ChInBtn').addEventListener('click', OpenAuth);

function OpenAuth () {
    document.location.href ="http://www.google.com"
}

document.forms.AuthForm.onsubmit = function () {
    let Uname = this.email.value;
    let Upassword = this.password.value;
    localStorage.setItem (Uname, Upassword);
    open('index.html');
    return false;
}
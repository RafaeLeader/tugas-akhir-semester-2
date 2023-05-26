function checkInput() {
    let inputEmail = document.getElementById('inputEmail').value;
    let inputPassword = document.getElementById('inputPassword').value;
    let InputNama = document.getElementById('inputNama').value;

    if (inputEmail === '' && inputPassword === '' && inputNama === '') {
        document.getElementById('result').innerHTML = 'Nama, Email Dan Password Tidak Boleh Kosong'
    }   else if (inputEmail === '') {
        document.getElementById('result').innerHTML = 'Email Tidak Boleh Kosong'
    }   else if (inputPassword === '') {
        document.getElementById('result').innerHTML = 'Password Tidak Boleh Kosong'
    }   else {
        window.location.href = 'Project.html'
    }

}
function Sign(){
    alert ("Akun Disimpan")
}
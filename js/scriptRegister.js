const myForm = document.getElementById('myForm');
myForm.addEventListener("submit", (e) => {
    const email = document.getElementById('email').value;
    const namaLengkap = document.getElementById('namaLengkap').value;
    const noTelp = document.getElementById('noTelp').value;
    const alamat = document.getElementById('alamat').value;
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('confPassword').value;
    e.preventDefault()
    // const formData = new FormData(form)
    // var meggedObj = {}; // constructing new obj.

    // // add the form key/value pairs
    // for (var [key, val] of formData.entries()) {
    //     meggedObj[key] = val;
    // }
    console.log(email);
    console.log(namaLengkap);
    console.log(noTelp);
    console.log(alamat);
    console.log(password);
    console.log(confPassword);
    // console.log(email.toString());
    fetch('http://localhost:3000/register', {
        method: "POST",
        // credentials: "include", // Menggunakan key saat melakukan POST
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,full_name:namaLengkap,phone_number:noTelp,address:alamat,password,repassword:confPassword})
    }).then(
        response => {
            return response.json() // Respon akan ditampilkan dalam bentuk JSON
        }
    )
    .then(data => {
        
    if (data.status === true) {
        window.location.href = "http://localhost:8000/login.html";
    }
    })
})
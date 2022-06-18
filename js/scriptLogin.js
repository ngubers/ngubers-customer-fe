const myForm = document.getElementById('myForm')
myForm.addEventListener("submit", (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    e.preventDefault()
    // const formData = new FormData(form)
    // var meggedObj = {}; // constructing new obj.

    // // add the form key/value pairs
    // for (var [key, val] of formData.entries()) {
    //     meggedObj[key] = val;
    // }

    fetch('http://localhost:3000/login', {
        method: "POST",
        // credentials: "include", // Menggunakan key saat melakukan POST
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
    }).then(
        response => {
            return response.json() // Respon akan ditampilkan dalam bentuk JSON
        }
    )
    .then(data => {
        if (data.status === true) {
            window.location.href = "http://localhost:8000/index.html";
        }
    })
})
const myForm = document.getElementById('myForm')

myForm.addEventListener("submit", async (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    e.preventDefault()
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            // credentials: "include", // Menggunakan key saat melakukan POST
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()

        console.log(data)

        if (!data.status) {
            throw new Error(data.message)
        }

        const date = new Date()

        date.setDate(date.getDate() + 1)
        document.cookie = `token=${data.token}; expires=${date}; SameSite=None; Secure`
        window.location.href = "http://localhost:8000/index.html";

    } catch (error) {
        if (error.message === "Failed to fetch") {
            swal({
                title: "Tidak ada koneksi!",
                text: "Mohon hubungi pihak IT!",
                icon: "error",
            })
        }

        swal({
            title: "Login gagal!",
            text: error.message,
            icon: "error",
        })
    }
})
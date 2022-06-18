function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkToken() {
    let token = getCookie("token");
    if (token != "") {
        return token
    }

    return false
}

function pageOnMount() {
    const cookie = checkToken()
    const buttonLogin = document.getElementById('action-login')
    if (cookie) {
        buttonLogin.textContent = 'Logout'

        buttonLogin.addEventListener('click', () => {
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
            window.location.href = "http://localhost:8000/"
        })
    } else {
        buttonLogin.textContent = 'Login'
        buttonLogin.addEventListener('click', () => {
            window.location.href = "http://localhost:8000/login.html"
        })
    }
}

function authorizePage() {
    const cookie = checkToken()
    if (!cookie) {
        window.location.href = "http://localhost:8000/login.html"
    }
}
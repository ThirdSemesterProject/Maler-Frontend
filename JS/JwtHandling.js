/* JWT handling */
const API_LOGIN = 'http://localhost:8080/login';
const API_SIGNUP = 'http://localhost:8080/signup';
/*
function getToken(){
    const localstorage_user = JSON.parse(localStorage.getItem('user'))
    return  localstorage_user.token
}
*/

function getToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
        console.log("No valid token found. Please log in.");
        return null;
    }
    return user.token;
}

function signup(event) {

    const nameField = document.getElementById("username-field").value;
    const passwordFieldSignup = document.getElementById("password-field").value;
    let payload = {
        username: nameField,
        password: passwordFieldSignup
    };
    payload = JSON.stringify(payload)
    fetch(API_SIGNUP,
        {
            method: "POST",
            body: payload,
            headers:{'content-type': 'application/json'}
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(JSON.stringify(data));
        })
}

function login(event) {

    const usernameField = document.getElementById("username-field").value;
    const passwordField = document.getElementById("password-field").value;
    let payload = {
        username: usernameField,
        password: passwordField
    };
    payload = JSON.stringify(payload)
    fetch(API_LOGIN,
        {
            method: "POST",
            body: payload,
            headers:{'content-type': 'application/json'}
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            localStorage.setItem('user', JSON.stringify(res));
            console.log(JSON.stringify(res));
        })
}

function logout(event) {

    localStorage.removeItem('user')
    console.log("You have logged out.");
    clearData();
}

function deleteUser(event) {
    if(localStorage.getItem('user') == undefined){
        printThis(div, "No token. Login first", "red")
        return
    }
    const usernameDeleteField = document.getElementById("usernameDeleteField").value;
    let payload = {
        username: usernameDeleteField,
        password: "password"  // dummy password here
    };
    payload = JSON.stringify(payload)
    myFetch("deleteUser", "DELETE", payload, getToken())
        .then((data) => {
            printThis(div, JSON.stringify(data), "green")
        })
}
/*
function getSecret(event) {
    event.preventDefault()
    if(localStorage.getItem('user') == undefined){
        console.log("No token. Login first");
        return
    }

    const token = getToken();
    console.log(token);
    myFetch("getSecret", "POST", null, getToken())
        .then((data) => {
            console.log(JSON.stringify(data));
        })
}
 */

function getSecret(event) {
    event.preventDefault();

    // Check if a user is logged in
    const token = getToken();
    if (!token) {
        console.log("No token. Login first.");
        alert("You must log in to access this feature."); // Notify the user
        return;
    }

    // Fetch the secret data using the token
    myFetch("getSecret", "POST", null, token)
        .then((data) => {
            console.log("Secret data:", JSON.stringify(data));
        })
        .catch((err) => {
            console.error("Failed to fetch secret:", err);
        });
}

function myFetch(endpoint, method, payload=null, token){
    return fetch(`http://localhost:8080/${endpoint}`,  // important to start this line with 'return'
        {
            method: method,
            body: payload,
            headers:{'content-type': 'application/json',
                'Authorization': 'Bearer ' + token }
        })
        .then(function (res) {
            return res.json(); // wait for .json() to complete
        })
        .then(function (data) { // the data, provided by server response
            return data
        })
}

document.getElementById('btn-get-secret').onclick = getSecret;

document.getElementById('btn-fetch').onclick = function (evt) {
    fetchData();
}

document.getElementById('btn-signup').onclick = function (evt) {
    evt.preventDefault();
    showModalLogin(false);
}

const btnShowLogin = document.getElementById('btn-show-login');
btnShowLogin.onclick = function (evt) {
    evt.preventDefault();
    if (btnShowLogin.innerText == 'Sign in') {
        showModalLogin(true);
        btnShowLogin.innerText = 'Sign out';
    } else {
        btnShowLogin.innerText = 'Sign in';
        logout();
    }
};
/*
function showModalLogin(login) {
    const myModal = new bootstrap.Modal(document.getElementById('login-modal'));
    let lbl
    if (login) {lbl = "Login"} else {lbl = "Sign up"}
    document.getElementById("modal-title").innerText = lbl;
    document.getElementById("btn-form-login").innerText = lbl;
    myModal.show()
}
 */

function showModalLogin(isLogin) {
    const modal = document.getElementById('login-modal');
    const title = document.getElementById("modal-title");
    const loginButton = document.getElementById("btn-form-login");

    // Update modal title and button text based on login or signup
    title.innerText = isLogin ? "Login" : "Sign up";
    loginButton.innerText = isLogin ? "Login" : "Sign up";

    // Toggle modal visibility
    modal.classList.remove('hidden');
}

/*
document.getElementById('btn-form-login').onclick = function (evt) {
    evt.preventDefault();
    const loginTitle = document.getElementById("modal-title").innerText;
    if (loginTitle == "Sign up") {
        signup();
    }
    else
    {
        login();
    }
}
 */

document.getElementById('btn-form-login').onclick = function (evt) {
    evt.preventDefault();

    // Fetch only the modal title text
    const loginTitle = document.getElementById("modal-title").innerText;

    if (loginTitle === "Sign up") {
        signup();
    } else {
        login();
    }
    toggleModal(); // Close the modal after login or signup
};

function toggleModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.toggle('hidden');
}
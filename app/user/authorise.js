const loginForm = document.getElementById("login-block");
const loginButton = document.getElementById("login-btn");
let user_password = {"monkey": "secret"}
let user_email = {"monkey": "monkey@domain.com"}


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.name.value;
    const password = loginForm.pass.value;

    if (user_password[username] === password) {
        alert("Вітаємо у світі бідної реалізації веб-застосунку!");
        location.reload();
    } else {
        alert("Треба протерти окуляри, ми вас не розпізнали!");
        location.reload();
    }
})


document.addEventListener('DOMContentLoaded', function() {
    

    const loginButton = document.getElementById('login-button');
    const clearButton = document.getElementById('clear-button');

    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    loginButton.addEventListener('click', function() {
        const enteredUsername = usernameField.value;
        const enteredPassword = passwordField.value;

        if (enteredUsername === enteredPassword ) {
            window.location.href = '../landing-page/landing-page.html'; // Replace with your actual landing page URL
        } else {
            alert("Invalid username or password!");
        }
    });

    clearButton.addEventListener('click', function() {
        usernameField.value = "";
        passwordField.value = "";
    });
});

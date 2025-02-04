document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');

    // Load existing users
    let users = JSON.parse(localStorage.getItem('users')) || [];

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('new-username').value.trim();
        const password = document.getElementById('new-password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Validation
        if (!username || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Check if user already exists
        if (users.some(u => u.username === username)) {
            alert('Username already exists!');
            return;
        }

        // Add new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Account created successfully! Redirecting to login...');
        window.location.href = '../index-page/index.html';
    });

    // Login page redirection
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '../index-page/index.html';
    });
});document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');

    // Load existing users
    let users = JSON.parse(localStorage.getItem('users')) || [];

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('new-username').value.trim();
        const password = document.getElementById('new-password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Validation
        if (!username || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Check if user already exists
        if (users.some(u => u.username === username)) {
            alert('Username already exists!');
            return;
        }

        // Add new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Account created successfully! Redirecting to login...');
        window.location.href = '/index-page/index.html';
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/index-page/index.html';
    });
});
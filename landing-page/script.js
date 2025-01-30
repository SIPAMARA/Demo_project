document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.querySelector('.button:last-child'); 

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            const userConfirmation = confirm('Are you sure you want to log out?');

            if (userConfirmation) {
                window.location.href = '../index-page/index.html'; 
            } else {
                window.location.href = 'landing-page.html'; 
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle dropdown menu
    menuButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Logout confirmation handler
    document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
        if (event.target.textContent === 'Logout') {
            event.preventDefault();
            const confirmLogout = confirm("Are you sure you want to logout?");
            
            if (confirmLogout) {
                // localStorage.removeItem('users');               
                window.location.href = '../index-page/index.html';
            }
        }
    });
});
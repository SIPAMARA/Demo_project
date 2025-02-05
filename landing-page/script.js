document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle burger menu
    burgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Toggle right side menu
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close menus when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && !event.target.closest('.burger-menu')) {
            navbar.classList.remove('active');
        }
        if (!event.target.closest('.menu-container')) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Logout confirmation
    document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
        if (event.target.textContent === 'Logout') {
            event.preventDefault();
            if (confirm("Are you sure you want to logout?")) {
                // localStorage.removeItem('users');
                window.location.href = '/index.html';
            }
        }
    });
});
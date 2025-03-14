document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const viewListToggle = document.getElementById('viewListToggle');
    const logoutButton = document.querySelector('.Logout');

    // Toggle burger menu
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navbar.classList.toggle('active');
    });

    // Toggle right side menu
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Toggle "View List" dropdown in mobile view
    if (viewListToggle) {
        const dropdownContent = viewListToggle.nextElementSibling;
        viewListToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }

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
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (confirm("Are you sure you want to logout?")) {
                window.location.href = '/index.html';
            }
        });
    }
});

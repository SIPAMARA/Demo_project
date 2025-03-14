document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    loginButton.addEventListener('click', function(event) { 
        event.preventDefault(); 

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            console.log("Login successful!"); 
            alert('Login successful! Redirecting...');

            window.location.href = '/landing-page/landing-page.html';
            

        } else {
            alert('Invalid credentials! Please try again');
        }
    });

    signupButton.addEventListener('click', function() {
        window.location.href = '/Sign-up/signup.html'; 
        
    });

    const verticalNavbar = document.querySelector('.vertical-navbar');
    const inputs = document.querySelectorAll('input');
    let hoverCount = 0;
    
    // Function to hide the sidebar
    function hideSidebar() {
      verticalNavbar.style.opacity = '0';
      setTimeout(() => {
        verticalNavbar.style.display = 'none';
      }, 300);
    }
    
    // Function to show the sidebar
    function showSidebar() {
      verticalNavbar.style.display = 'flex';
      setTimeout(() => {
        verticalNavbar.style.opacity = '0.8';
      }, 10);
    }
    
    // Attach mouseenter and mouseleave events to each input field
    inputs.forEach(input => {
      input.addEventListener('mouseenter', () => {
        hoverCount++;
        hideSidebar();
      });
      
      input.addEventListener('mouseleave', () => {
        hoverCount--;
        // If the cursor is no longer over any input, show the sidebar
        if (hoverCount <= 0) {
          showSidebar();
        }
      });
    });
  
});
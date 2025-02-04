document.addEventListener('DOMContentLoaded', function() {
    const masterForm = document.getElementById('master-form');

    masterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(masterForm);
        const data = Object.fromEntries(formData.entries());

        // Display data in console (for demonstration)
        console.log("Form Data:", data);

        // Show success message
        alert("Form submitted successfully!");

        // Reset form
        masterForm.reset();
    });
});
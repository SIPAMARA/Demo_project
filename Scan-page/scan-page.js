function openScanner() {
    document.getElementById('scanPage').style.display = 'block';
}

function closeScanner() {
    document.getElementById('scanPage').style.display = 'none';
}

function uploadDocument() {
    // Add document upload logic here
    alert('Document upload functionality would go here');
}

// Close scanner when clicking outside the container
document.getElementById('scanPage').addEventListener('click', function(e) {
    if (e.target === this) closeScanner();
});

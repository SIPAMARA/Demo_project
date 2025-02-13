// Open Add Material Modal
function openAddModal() {
    document.getElementById('addModal').style.display = 'block';
}

// Close Add Material Modal
function closeAddModal() {
    document.getElementById('addModal').style.display = 'none';
}

// Add new material to table
function addMaterial(event) {
    event.preventDefault();
    
    const name = document.getElementById('materialName').value;
    const quantity = document.getElementById('materialQuantity').value;

    const tableBody = document.getElementById('materialBody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${quantity}</td>
    `;

    tableBody.appendChild(newRow);
    closeAddModal();
    resetForm();
}

// Clear all table data
function clearTable() {
    if(confirm('Are you sure you want to clear all materials?')) {
        document.getElementById('materialBody').innerHTML = '';
    }
}

// Reset form inputs
function resetForm() {
    document.getElementById('materialName').value = '';
    document.getElementById('materialQuantity').value = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('addModal');
    if (event.target === modal) {
        closeAddModal();
    }
}

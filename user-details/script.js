       function showPage(pageId) {
            // Hide all pages
            // document.querySelectorAll('.page').forEach(page => {
            //     page.classList.remove('active-page');
            // });
            
            // Show selected page
            document.getElementById(`user-page`).classList.add('active-page');
        }

        // Add clear functionality
        document.querySelectorAll('.clear-btn').forEach(button => {
            button.addEventListener('click', () => {
                const form = button.closest('.container');
                form.querySelectorAll('select, input').forEach(field => {
                    field.value = '';
                });
            });
        });

        // Initialize with first page
        showPage('user');

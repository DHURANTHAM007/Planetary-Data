document.addEventListener('DOMContentLoaded', () => {

    // Create twinkling stars background
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 150;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        starsContainer.appendChild(star);
    }
    
    // Make table headers sortable
    document.querySelectorAll('th').forEach((header, headerIndex) => {
        header.addEventListener('click', () => {
            const table = header.closest('table');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const isNumeric = headerIndex > 0; // All columns except planet name are numeric
            
            // Sort the rows
            rows.sort((a, b) => {
                let aValue = a.children[headerIndex].innerText;
                let bValue = b.children[headerIndex].innerText;
                
                if (isNumeric) {
                    // Extract just the first number for comparison
                    aValue = parseFloat(aValue.match(/[\d,.]+/)[0].replace(/,/g, ''));
                    bValue = parseFloat(bValue.match(/[\d,.]+/)[0].replace(/,/g, ''));
                }
                
                if (aValue < bValue) return -1;
                if (aValue > bValue) return 1;
                return 0;
            });
            
            // Append sorted rows back to the table body
            rows.forEach(row => tbody.appendChild(row));
        });
    });

});

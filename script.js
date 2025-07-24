// Create twinkling stars background
const starsContainer = document.getElementById('stars-container');
const numberOfStars = 150;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    star.style.animationDelay = `${Math.random() * 4}s`;
    
    starsContainer.appendChild(star);
}

// Make table headers sortable
document.querySelectorAll('th').forEach(header => {
    header.addEventListener('click', () => {
        const table = header.closest('table');
        const index = Array.from(header.parentElement.children).indexOf(header);
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const isNumeric = index > 0;
        
        rows.sort((a, b) => {
            let aValue = a.children[index].innerText;
            let bValue = b.children[index].innerText;
            
            if (isNumeric) {
                aValue = parseFloat(aValue.match(/[\\d.]+/)[0]);
                bValue = parseFloat(bValue.match(/[\\d.]+/)[0]);
            }
            
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
            return 0;
        });
        
        const tbody = table.querySelector('tbody');
        rows.forEach(row => tbody.appendChild(row));
    });
});

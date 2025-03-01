document.addEventListener('DOMContentLoaded', () => {
    // Initialize experts
    displayExperts(experts);
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = experts.filter(expert => 
            expert.sector.toLowerCase().includes(searchTerm) ||
            expert.expertise.toLowerCase().includes(searchTerm)
        );
        displayExperts(filtered);
    });

    // Filter by sector
    document.querySelectorAll('#sectorFilters button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#sectorFilters button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const sector = btn.dataset.sector;
            const filtered = sector === 'all' ? experts : experts.filter(expert => expert.sector === sector);
            displayExperts(filtered);
        });
    });
});

function displayExperts(experts) {
    const container = document.getElementById('expertsContainer');
    container.innerHTML = experts.map(expert => `
        <div class="col-md-4">
            <div class="card expert-card">
                <div class="card-body">
                    <h5 class="card-title">${expert.name}</h5>
                    <span class="badge bg-primary">${expert.sector}</span>
                    <p class="mt-2">${expert.expertise}</p>
                    <div class="rating">${'★'.repeat(Math.floor(expert.rating))}</div>
                    <p class="price">${expert.price}</p>
                    <a href="expert-details.html?id=${expert.id}" class="btn btn-primary">View Profile</a>
                </div>
            </div>
        </div>
    `).join('');
}
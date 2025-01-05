// This file contains JavaScript functionality for the portfolio, including event listeners and dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listener for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example: Load portfolio items dynamically
    const portfolioContainer = document.getElementById('portfolio-items');
    const portfolioItems = [
        {
            title: 'Project 1',
            description: 'Description of project 1.',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2.',
            link: '#'
        }
        // Add more projects as needed
    ];

    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}">View Project</a>
        `;
        portfolioContainer.appendChild(itemElement);
    });
});
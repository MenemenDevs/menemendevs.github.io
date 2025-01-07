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
            description: 'This is the first project description.',
            link: 'https://www.example.com'
        },
        {
            title: 'Project 2',
            description: 'This is the second project description.',
            link: 'https://www.example.com'
        },
        {
            title: 'Project 3',
            description: 'This is the third project description.',
            link: 'https://www.example.com'
        }
    ]

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
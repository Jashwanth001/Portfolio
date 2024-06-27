document.addEventListener('DOMContentLoaded', () => {
        // Toggle navigation menu on small screens
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
    
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    
        // Highlight active menu item on click
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
                // Close the menu on click for smaller screens
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    
        // Other JavaScript functionalities you already have
        document.addEventListener('DOMContentLoaded', () => {
            // Show a success message when the CV download link is clicked
            const downloadCvButton = document.getElementById('download-cv');
            downloadCvButton.addEventListener('click', () => {
                alert('Your CV is being downloaded!');
            });
        
            // Show a success message when the contact form is submitted
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Your message has been sent successfully!');
                contactForm.reset();
            });
        
            // Add interactivity to the navigation menu
            const navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    event.target.classList.add('active');
                });
            });
    });
        document.addEventListener('DOMContentLoaded', function() {
            var backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
 
});

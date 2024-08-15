document.addEventListener('DOMContentLoaded', function() {
    // Example of interactive feature: Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            // handles clicks whilst enabling smooth scrolling.
            window.location.href = this.getAttribute('href');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

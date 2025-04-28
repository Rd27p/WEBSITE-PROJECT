document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const yButton = document.querySelector('.y-button');
    const iButton = document.querySelector('.i-button');

    // Smooth scroll
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetMargin = 70;
                const offsetPosition = elementPosition - navbarHeight - offsetMargin;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Close menu on mobile
            navMenu.classList.remove('active');
        });
    });

    // Update version
    function updateVersion(version) {
        const versionElement = document.getElementById('version');
        if (versionElement) {
            versionElement.textContent = `Version: ${version}`;
        }
    }
    updateVersion("0.0.5");

    // Social Media button alert
    if (yButton) {
        yButton.addEventListener('click', () => {
            alert("You are going to Raka Darma's YouTube Channel!");
        });
    }

    if (iButton) {
        iButton.addEventListener('click', () => {
            alert("You are going to Raka Darma's Instagram!");
        });
    }

    // Toggle Hamburger Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Dark Mode Toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            darkModeToggle.textContent = 
                document.body.classList.contains('dark-mode') 
                ? 'Light Mode' 
                : 'Dark Mode';
        });
    }
});
    
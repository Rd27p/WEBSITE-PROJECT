document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const yButton = document.querySelector('.y-button');
    const iButton = document.querySelector('.i-button');

    // Check and apply the saved mode preference from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Dark Mode';
    }

    // Smooth scroll for in-page navigation
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Check if it's an internal link (anchor link)
            if (targetId.startsWith('#')) {
                e.preventDefault();
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
            }
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
            const isDarkMode = document.body.classList.contains('dark-mode');

            // Update localStorage with the current mode
            localStorage.setItem('darkMode', isDarkMode);

            // Change button text based on mode
            darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        });
    }
});

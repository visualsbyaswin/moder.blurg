   (function() {
            const hamburgerBtn = document.getElementById('hamburger');
            const overlay = document.getElementById('menuOverlay');
            const navHeader = document.getElementById('header');
            const links = overlay.querySelectorAll('a');

            // Toggle menu
            hamburgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                hamburgerBtn.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking on overlay
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    hamburgerBtn.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Close menu when clicking on a link
            links.forEach(link => {
                link.addEventListener('click', () => {
                    hamburgerBtn.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navHeader.classList.add('scrolled');
                } else {
                    navHeader.classList.remove('scrolled');
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && overlay.classList.contains('active')) {
                    hamburgerBtn.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        })();
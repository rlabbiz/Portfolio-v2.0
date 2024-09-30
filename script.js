document.addEventListener('DOMContentLoaded', () => {

    new Typed('#typed-text', {
        strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 500);
        });
    };

    const skillsSection = document.querySelector('.skills-section');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);

    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        const icon = item.querySelector('.skill-icon');

        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const tiltX = (x - centerX) / centerX;
            const tiltY = (y - centerY) / centerY;

            item.style.transform = `perspective(1000px) rotateX(${tiltY * 5}deg) rotateY(${-tiltX * 5}deg) scale3d(1.05, 1.05, 1.05)`;
            icon.style.transform = `translate(${tiltX * 10}px, ${tiltY * 10}px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            icon.style.transform = '';
        });

        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            item.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        });
    });

    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.7)';
        follower.style.transform = 'scale(3)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(0)';
        });
        link.addEventListener('mouseout', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });

    const socialLinks = document.querySelectorAll('.social-links-header a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) rotate(5deg)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) rotate(0)';
        });
    });

    // Responsive menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('menu-toggle-active');
    });

    // Close menu when clicking in a link
    const navMenuLink = document.querySelectorAll('nav ul li a');
    navMenuLink.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('menu-toggle-active');
        });
    });

    // Adjust particles for mobile devices
    function adjustParticles() {
        if (window.innerWidth <= 768) {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 30 },
                    size: { value: 2 }
                }
            });
        } else {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 100 },
                    size: { value: 3 }
                }
            });
        }
    }

    window.addEventListener('resize', adjustParticles);
    adjustParticles();

    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.opacity = "1";
        } else {
            scrollToTopBtn.style.opacity = "0";
        }
    };
    
    // Smooth scroll function
    function smoothScrollToTop() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 20);
        }
    }
    
    // When the user clicks on the button, smoothly scroll to the top of the document
    scrollToTopBtn.onclick = function(e) {
        e.preventDefault();
        smoothScrollToTop();
    };

});
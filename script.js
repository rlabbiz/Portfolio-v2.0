document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-text', {
        strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true
    });

    // particlesJS("particles-js", {
    //     particles: {
    //         number: { value: 100, density: { enable: true, value_area: 800 } },
    //         color: { value: "#00ffff" },
    //         shape: { type: "circle" },
    //         opacity: { value: 0.5, random: false },
    //         size: { value: 3, random: true },
    //         line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
    //         move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    //     },
    //     interactivity: {
    //         detect_on: "window",
    //         events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
    //         modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    //     },
    //     retina_detect: true
    // });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    // const projectsSection = document.querySelector('.projects-section');
    // const projectsObserver = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const projectCards = document.querySelectorAll('.project-card');
    //             projectCards.forEach((card, index) => {
    //                 setTimeout(() => {
    //                     card.style.opacity = '1';
    //                     card.style.transform = 'translateY(0)';
    //                 }, index * 100);
    //             });
    //             projectsObserver.unobserve(entry.target);
    //         }
    //     });
    // }, { threshold: 0.5 });

    // projectsObserver.observe(projectsSection);

    // const projectCards = document.querySelectorAll('.project-card');
    // projectCards.forEach(card => {
    //     card.addEventListener('click', () => {
    //         const project = {
    //             title: card.querySelector('h3').textContent,
    //             image: card.querySelector('img').src,
    //             description: 'This is a sample project description. Replace this with actual project details.',
    //             skills: Array.from(card.querySelectorAll('.skill-tag')).map(tag => tag.textContent),
    //             github: card.querySelector('.project-link[href*="github"]').href,
    //             demo: card.querySelector('.project-link:not([href*="github"])').href
    //         };
    //         openModal(project);
    //     });
    // });

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

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
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
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
        }
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

    // Responsive image loading
    function loadResponsiveImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (window.innerWidth <= 768) {
                img.src = img.src.replace('.jpg', '-small.jpg');
            } else {
                img.src = img.src.replace('-small.jpg', '.jpg');
            }
        });
    }

    window.addEventListener('resize', loadResponsiveImages);
    loadResponsiveImages();
});
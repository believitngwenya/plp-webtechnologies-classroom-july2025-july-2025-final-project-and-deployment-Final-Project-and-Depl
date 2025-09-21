document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                hamburger.innerHTML = navMenu.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Back to top button
            const backToTopButton = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
            
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Form validation
            const contactForm = document.getElementById('contactForm');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    let isValid = true;
                    
                    // Validate name
                    const nameInput = document.getElementById('name');
                    const nameError = document.getElementById('nameError');
                    
                    if (nameInput.value.trim() === '') {
                        nameError.style.display = 'block';
                        isValid = false;
                    } else {
                        nameError.style.display = 'none';
                    }
                    
                    // Validate email
                    const emailInput = document.getElementById('email');
                    const emailError = document.getElementById('emailError');
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (!emailPattern.test(emailInput.value)) {
                        emailError.style.display = 'block';
                        isValid = false;
                    } else {
                        emailError.style.display = 'none';
                    }
                    
                    // Validate message
                    const messageInput = document.getElementById('message');
                    const messageError = document.getElementById('messageError');
                    
                    if (messageInput.value.trim() === '') {
                        messageError.style.display = 'block';
                        isValid = false;
                    } else {
                        messageError.style.display = 'none';
                    }
                    
                    // If form is valid, show success message
                    if (isValid) {
                        alert('Thank you for your message! I will get back to you soon.');
                        contactForm.reset();
                    }
                });
            }
            
            // Animation on scroll
            function animateOnScroll() {
                const elements = document.querySelectorAll('.skill-card, .project-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Initialize elements for animation
            document.querySelectorAll('.skill-card, .project-card').forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            // Trigger once on load
            animateOnScroll();
        });
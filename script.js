        // Mobile Navigation
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile nav when a link is clicked
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
        
        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form Submission
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const eventDate = document.getElementById('eventDate').value;
                const eventType = document.getElementById('eventType').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the form data to a server
                // For now, we'll just show an alert
                alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
                
                // Reset form
                bookingForm.reset();
            });
        }
        
        // Simple Testimonial Slider
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const testimonials = [
            {
                text: "A música do Celebrare elevou nossa cerimônia a outro nível. Todos os convidados ficaram emocionados com a performance de Karine e Marcionei. Cada nota musical foi executada com perfeição e sensibilidade, criando uma atmosfera verdadeiramente mágica.",
                author: "Maria e João",
                event: "Casamento em Março/2024"
            },
            {
                text: "Contratar o Celebrare foi a melhor decisão que tomamos para nosso casamento. A música ao vivo trouxe uma elegância e emoção que jamais conseguiríamos com música gravada. Profissionais extremamente talentosos e atenciosos!",
                author: "Ana e Pedro",
                event: "Casamento em Janeiro/2024"
            },
            {
                text: "Nossa festa de final de ano da empresa foi um sucesso graças à performance impecável do Celebrare. A seleção musical foi perfeita para o ambiente corporativo, mas ao mesmo tempo descontraída e elegante.",
                author: "Tech Solutions",
                event: "Evento Corporativo em Dezembro/2023"
            }
        ];
        
        let currentTestimonial = 0;
        
        function updateTestimonial() {
            const testimonialCard = document.querySelector('.testimonial-card');
            const testimonial = testimonials[currentTestimonial];
            
            testimonialCard.innerHTML = `
                <div class="testimonial-text">
                    ${testimonial.text}
                </div>
                <div class="testimonial-author">
                    ${testimonial.author}
                </div>
                <div class="testimonial-event">
                    ${testimonial.event}
                </div>
            `;
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function() {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonials.length - 1;
                }
                updateTestimonial();
            });
            
            nextBtn.addEventListener('click', function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                updateTestimonial();
            });
        }

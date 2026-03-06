// Datos de ejemplo para estudiantes
const studentsData = [
    {
        name: "William Andres Gutierrez Hernandez",
        role: "Líder de Grupo",
        description: "Siempre positivo y motivador, organizó muchas actividades del curso.",
        icon: "👩‍🎓"
    },
    {
        name: "Carlos Rodríguez",
        role: "Mejor Promedio",
        description: "Dedicado y responsable, siempre dispuesto a ayudar a sus compañeros.",
        icon: "👨‍🎓"
    },
    {
        name: "Sofía Martínez",
        role: "Artista del Curso",
        description: "Creativa y talentosa, decoró muchos eventos del grado.",
        icon: "👩‍🎨"
    },
    {
        name: "Diego Hernández",
        role: "Deportista Destacado",
        description: "Capitán del equipo de fútbol, lideró con ejemplo y pasión.",
        icon: "⚽"
    },
    {
        name: "Valentina López",
        role: "Mejor Amiga",
        description: "Siempre sonriente y solidaria, unió al grupo con su alegría.",
        icon: "💫"
    },
    {
        name: "Mateo Torres",
        role: "Curioso Investigador",
        description: "Apasionado por la ciencia, ganó varios concursos escolares.",
        icon: "🔬"
    }
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Generar tarjetas de estudiantes
    generateStudentCards();
    
    // Inicializar navegación móvil
    initMobileNavigation();
    
    // Inicializar animaciones al hacer scroll
    initScrollAnimations();
    
    // Inicializar modal de imágenes
    initImageModal();
    
    // Inicializar efectos interactivos
    initInteractiveEffects();
    
    // Inicializar contador de visitas
    initVisitCounter();
    
    // Inicializar partículas dinámicas
    initDynamicParticles();
    
    // Inicializar pestañas del horario
    initScheduleTabs();
}

// Generar tarjetas de estudiantes dinámicamente
function generateStudentCards() {
    const studentsGrid = document.getElementById('studentsGrid');
    
    studentsData.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'student-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="student-image">
                <span>${student.icon}</span>
            </div>
            <div class="student-info">
                <h3 class="student-name">${student.name}</h3>
                <p class="student-role">${student.role}</p>
                <p class="student-description">${student.description}</p>
            </div>
        `;
        
        // Añadir evento de click para mostrar detalles
        card.addEventListener('click', () => showStudentDetails(student));
        
        studentsGrid.appendChild(card);
    });
}

// Mostrar detalles del estudiante en modal
function showStudentDetails(student) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    // Crear contenido HTML para el modal
    const modalContent = `
        <div style="text-align: center; color: white; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">${student.icon}</div>
            <h2 style="color: #D7CCC8; margin-bottom: 10px;">${student.name}</h2>
            <h3 style="color: #A1887F; margin-bottom: 20px;">${student.role}</h3>
            <p style="font-size: 1.1rem; line-height: 1.6;">${student.description}</p>
            <div style="margin-top: 30px;">
                <button onclick="closeModal()" style="
                    background: #8D6E63;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                ">Cerrar</button>
            </div>
        </div>
    `;
    
    // Crear un div temporal para mostrar el contenido
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalContent;
    modal.appendChild(tempDiv);
    
    modal.style.display = 'block';
}

// Navegación móvil
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animar las líneas del menú hamburguesa
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
    });
    
    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos con clase fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // También observar las secciones
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Modal de imágenes
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    // Cerrar modal con el botón X
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // Cerrar modal haciendo clic fuera
    window.onclick = function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Limpiar contenido adicional del modal
    while (modal.children.length > 3) {
        modal.removeChild(modal.lastChild);
    }
}

// Efectos interactivos
function initInteractiveEffects() {
    // Efecto parallax en el hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Efecto hover en tarjetas de memoria
    document.querySelectorAll('.memory-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Efecto de escritura para el título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 2s ease';
            heroTitle.style.opacity = '1';
        }, 500);
    }
    
    // Añadir efectos a los botones
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Contador de visitas
function initVisitCounter() {
    let visits = localStorage.getItem('pageVisits') || 0;
    visits++;
    localStorage.setItem('pageVisits', visits);
    
    // Mostrar mensaje de bienvenida
    if (visits === 1) {
        showWelcomeMessage();
    }
}

function showWelcomeMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #8D6E63, #5D4037);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1001;
        max-width: 300px;
        animation: slideInRight 0.5s ease;
    `;
    message.innerHTML = `
        <h3 style="margin: 0 0 10px 0;">¡Bienvenido!</h3>
        <p style="margin: 0;">Explora los recuerdos inolvidables de nuestra promoción de grado 10.</p>
        <button onclick="this.parentElement.remove()" style="
            background: white;
            color: #5D4037;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            font-weight: 600;
        ">Entendido</button>
    `;
    
    document.body.appendChild(message);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);
}

// Partículas dinámicas
function initDynamicParticles() {
    const heroParticles = document.querySelector('.hero-particles');
    if (!heroParticles) return;
    
    // Crear partículas adicionales dinámicamente
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < 8) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                width: ${Math.random() * 60 + 20}px;
                height: ${Math.random() * 60 + 20}px;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
                animation-duration: ${Math.random() * 3 + 4}s;
            `;
            heroParticles.appendChild(particle);
            
            // Eliminar partícula después de la animación
            setTimeout(() => {
                particle.remove();
            }, 7000);
        }
    }, 2000);
}

// Efecto de máquina de escribir para mensajes
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efectos de timeline cuando sea visible
function initTimelineEffects() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.6s ease';
        timelineObserver.observe(item);
    });
}

// Crear efecto de confeti para celebración
function createConfetti() {
    const colors = ['#8D6E63', '#A1887F', '#D7CCC8', '#EFEBE9'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            transition: all 2s ease;
            z-index: 9999;
            pointer-events: none;
        `;
        
        document.body.appendChild(confetti);
        
        // Animar caída
        setTimeout(() => {
            confetti.style.top = '100%';
            confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            confetti.style.opacity = '0';
        }, 100);
        
        // Limpiar
        setTimeout(() => {
            confetti.remove();
        }, 2100);
    }
}

// Añadir efecto de celebración al hacer click en el logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', () => {
            createConfetti();
        });
    }
});

// Inicializar efectos de timeline
initTimelineEffects();

// Inicializar pestañas del horario
function initScheduleTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetDay = button.getAttribute('data-day');
            
            // Remover clase active de todos los botones y horarios
            tabButtons.forEach(btn => btn.classList.remove('active'));
            daySchedules.forEach(schedule => schedule.classList.remove('active'));
            
            // Agregar clase active al botón clickeado y horario correspondiente
            button.classList.add('active');
            const targetSchedule = document.getElementById(targetDay);
            if (targetSchedule) {
                targetSchedule.classList.add('active');
            }
        });
    });
    
    // Mostrar el día actual automáticamente
    showCurrentDay();
}

// Mostrar el día actual en el horario
function showCurrentDay() {
    const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const today = new Date().getDay();
    const currentDay = days[today];
    
    // Si es día de semana (lunes-viernes), mostrar ese día
    if (today >= 1 && today <= 5) {
        const tabButton = document.querySelector(`[data-day="${currentDay}"]`);
        const daySchedule = document.getElementById(currentDay);
        
        if (tabButton && daySchedule) {
            // Remover active de todos
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.day-schedule').forEach(schedule => schedule.classList.remove('active'));
            
            // Agregar active al día actual
            tabButton.classList.add('active');
            daySchedule.classList.add('active');
        }
    }
}

// Añadir estilos CSS adicionales para animaciones
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .student-card:hover {
        box-shadow: 0 15px 40px rgba(93, 64, 55, 0.3) !important;
    }
    
    .timeline-item:nth-child(odd) {
        transform: translateX(50px);
    }
    
    .timeline-item:nth-child(even) {
        transform: translateX(-50px);
    }
`;
document.head.appendChild(additionalStyles);

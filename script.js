// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos link-card
    const linkCards = document.querySelectorAll('.link-card');
    
    // Aplicar efecto de movimiento flotante en hover
    linkCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // Calcular posición relativa del cursor dentro de la tarjeta
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posición X del cursor relativa a la tarjeta
            const y = e.clientY - rect.top; // Posición Y del cursor relativa a la tarjeta
            
            // Calcular rotación basada en la posición del cursor
            // Se divide entre 25 para limitar el grado de rotación
            const rotateY = ((x - rect.width / 2) / 25) * -1;
            const rotateX = (y - rect.height / 2) / 25;
            
            // Aplicar transformación
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        // Restaurar la posición original al salir
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
            }, 100);
        });
        
        // Eliminar la transición al entrar para que la rotación sea inmediata
        card.addEventListener('mouseenter', function() {
            card.style.transition = 'box-shadow 0.4s ease, background 0.4s ease';
        });
        
        // Añadir efecto de click
        card.addEventListener('click', function() {
            // Crear elemento visual de "ripple" al hacer clic
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            // Posicionar el efecto donde se hizo clic
            card.appendChild(ripple);
            
            // Eliminar el elemento después de la animación
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Animación para los iconos sociales
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        // Aplicar un retraso en la animación basado en el índice
        icon.style.animation = `fadeIn 0.5s ease ${index * 0.1}s backwards`;
        
        // Efecto de pulse al hacer hover
        icon.addEventListener('mouseenter', function() {
            icon.style.animation = 'pulse 1s infinite';
        });
        
        icon.addEventListener('mouseleave', function() {
            icon.style.animation = '';
        });
    });
    
    // Detectar cuando se hace scroll para aplicar efectos
    window.addEventListener('scroll', function() {
        // Calcular cuánto se ha desplazado la página
        const scrollPosition = window.scrollY;
        
        // Aplicar un efecto de parallax al fondo
        document.body.style.backgroundPosition = `0 ${scrollPosition * 0.05}px`;
    });
});

// Definir la animación de pulse en CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        width: 100px;
        height: 100px;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.5;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
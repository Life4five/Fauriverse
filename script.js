// Add smooth mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add gradient animation on mouse move
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const color1 = `rgba(102, 126, 234, ${0.3 + mouseX * 0.2})`;
    const color2 = `rgba(118, 75, 162, ${0.3 + mouseY * 0.2})`;
    
    container.style.background = `
        radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, ${color1} 0%, transparent 50%),
        radial-gradient(ellipse at bottom, ${color2} 0%, transparent 50%),
        linear-gradient(135deg, #667eea 0%, #764ba2 100%)
    `;
});

// Add click ripple effect
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.left = e.clientX - 10 + 'px';
    ripple.style.top = e.clientY - 10 + 'px';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 1s ease-out';
    ripple.style.zIndex = '1000';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
});

// Add ripple animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
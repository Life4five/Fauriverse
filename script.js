// Subtle parallax effect for particles
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.4;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Grid distortion on mouse move
document.addEventListener('mousemove', (e) => {
    const grid = document.querySelector('.grid-overlay');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const intensity = 0.3 + (1 - Math.abs(mouseX - 0.5)) * 0.2;
    grid.style.opacity = intensity;
});

// Click creates cold ripple effect
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.border = '2px solid rgba(74, 144, 226, 0.6)';
    ripple.style.left = e.clientX - 5 + 'px';
    ripple.style.top = e.clientY - 5 + 'px';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'coldRipple 1s ease-out';
    ripple.style.zIndex = '1000';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
});

// Add cold ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes coldRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(15);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Title glitch effect on hover
const title = document.querySelector('.title');
if (title) {
    title.addEventListener('mouseenter', () => {
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
            title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            glitchCount++;
            if (glitchCount > 5) {
                clearInterval(glitchInterval);
                title.style.transform = 'translate(0, 0)';
            }
        }, 50);
    });
}

// Scanline intensity variation
const scanlines = document.querySelector('.scanlines');
let scanIntensity = 0;
setInterval(() => {
    scanIntensity += 0.01;
    const intensity = Math.sin(scanIntensity) * 0.05 + 0.1;
    scanlines.style.opacity = intensity;
}, 100);

// Random particle spawn
function createColdParticle() {
    const particles = document.querySelector('.particles');
    const particle = document.createElement('div');
    particle.className = 'particle dynamic-particle';
    particle.style.width = (Math.random() * 3 + 2) + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    
    particles.appendChild(particle);
    
    setTimeout(() => particle.remove(), 25000);
}

// Spawn particles periodically
setInterval(createColdParticle, 4000);

// Ambient breathing effect
const container = document.querySelector('.container');
let breathe = 0;
setInterval(() => {
    breathe += 0.015;
    const brightness = Math.sin(breathe) * 0.03 + 1;
    container.style.filter = `brightness(${brightness})`;
}, 50);

// Console message
console.log('═══════════════════════════════════');
console.log('     FAURIVERSE - Coming 2026      ');
console.log('═══════════════════════════════════');
console.log('');
console.log('"While the fire burns — the identity exists"');
console.log('');
console.log('A story about identity, transformation,');
console.log('and what makes us human.');

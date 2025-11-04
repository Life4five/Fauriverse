// Particle system for embers/coals effect
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

// Get quote element position for default mouse target
function getQuoteCenter() {
    const quote = document.querySelector('.quote');
    if (quote) {
        const rect = quote.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }
    // Fallback to center of screen
    return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
}

let quoteCenter = getQuoteCenter();
let mouseX = quoteCenter.x;
let mouseY = quoteCenter.y;
let mouseActive = false; // Track if user has moved mouse

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Update quote center position on resize (only if mouse not active)
    if (!mouseActive) {
        quoteCenter = getQuoteCenter();
        mouseX = quoteCenter.x;
        mouseY = quoteCenter.y;
    }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Update quote position after animations complete
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!mouseActive) {
            quoteCenter = getQuoteCenter();
            mouseX = quoteCenter.x;
            mouseY = quoteCenter.y;
        }
    }, 4200); // Wait for fadeInUp animation (2s delay + 2s animation)
});

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseActive = true; // User has moved mouse, switch from quote to cursor
});

// Particle class for embers
class Particle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -Math.random() * 0.5 - 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 1000 + 100;
        this.maxLife = this.life;
        this.flicker = Math.random() * Math.PI * 2;
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.life--;
        this.flicker += 0.1;
        
        // Subtle attraction to mouse (or quote if mouse hasn't moved)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
            const force = (200 - distance) / 200 * 0.01;
            this.x += dx * force;
            this.y += dy * force;
        }
        
        if (this.y < -10 || this.life <= 0 || this.x < -10 || this.x > canvas.width + 10) {
            this.reset();
        }
    }
    
    draw() {
        const flickerOpacity = this.opacity * (0.7 + Math.sin(this.flicker) * 0.3);
        const lifeOpacity = this.life / this.maxLife;
        const finalOpacity = flickerOpacity * lifeOpacity;
        
        // Draw glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `rgba(255, 147, 79, ${finalOpacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(255, 100, 50, ${finalOpacity * 0.15})`);
        gradient.addColorStop(1, 'rgba(255, 79, 79, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 179, 120, ${finalOpacity})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animate);
}
animate();

// Mouse glow effect on container with constant ember animation
const container = document.getElementById('container');
let emberHue = 0; // Ember colors: 0=red, 20=orange, 40=orange-yellow
let emberTime = 0; // Timer for smooth oscillation

// Get quote position relative to container for gradient
function getQuotePositionInContainer() {
    const quote = document.querySelector('.quote');
    if (quote) {
        const containerRect = container.getBoundingClientRect();
        const quoteRect = quote.getBoundingClientRect();
        return {
            x: quoteRect.left - containerRect.left + quoteRect.width / 2,
            y: quoteRect.top - containerRect.top + quoteRect.height / 2
        };
    }
    return {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2
    };
}

let quotePos = getQuotePositionInContainer();
let currentMouseX = quotePos.x;
let currentMouseY = quotePos.y;
let gradientActive = false; // Track if mouse is over container

// Update quote position on load and resize
function updateGradientQuotePosition() {
    if (!gradientActive) {
        quotePos = getQuotePositionInContainer();
        currentMouseX = quotePos.x;
        currentMouseY = quotePos.y;
    }
}

window.addEventListener('resize', updateGradientQuotePosition);
window.addEventListener('load', () => {
    setTimeout(updateGradientQuotePosition, 4200); // After quote animation
});
updateGradientQuotePosition();

// Track mouse position over container
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    currentMouseX = e.clientX - rect.left;
    currentMouseY = e.clientY - rect.top;
    gradientActive = true;
});

// Continuous ember glow animation
function animateEmberGlow() {
    // Smooth oscillation: red → orange → red (no jump)
    emberTime += 0.01; // Speed of color change
    emberHue = 15 + Math.sin(emberTime) * 5; // Oscillates between 0-40
    
    // currentMouseX/Y always point to quote or cursor
    container.style.background = `
        radial-gradient(circle 400px at ${currentMouseX}px ${currentMouseY}px, 
            hsla(${emberHue}, 75%, 50%, 0.05) 0%, 
            transparent 50%),
        linear-gradient(135deg, 
            #0f1923 0%, 
            #1a1f2e 25%, 
            #0d1117 50%, 
            #1a1625 75%, 
            #0a0e1a 100%)
    `;
    
    requestAnimationFrame(animateEmberGlow);
}
animateEmberGlow();

// Click ripple effect with current ember color
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    
    // Use current ember hue for ripple
    ripple.style.cssText = `
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: radial-gradient(circle, hsla(${emberHue}, 75%, 50%, 0.05) 0%, transparent 70%);
        left: ${e.clientX - 15}px;
        top: ${e.clientY - 15}px;
        pointer-events: none;
        animation: rippleEffect 1.2s ease-out;
        z-index: 5;
    `;
    
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1200);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
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

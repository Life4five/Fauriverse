// Dynamic fire glow intensity based on mouse position
document.addEventListener('mousemove', (e) => {
    const fireGlow = document.querySelector('.fire-glow');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const intensity = 0.6 + (1 - Math.abs(mouseX - 0.5)) * 0.4;
    fireGlow.style.opacity = intensity;
    
    const smokes = document.querySelectorAll('.smoke');
    smokes.forEach((smoke, index) => {
        const speed = (index + 1) * 0.3;
        const x = (mouseX - 0.5) * speed * 30;
        const y = (mouseY - 0.5) * speed * 30;
        smoke.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add extra embers on click
document.addEventListener('click', (e) => {
    const fireParticles = document.querySelector('.fire-particles');
    const emberCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < emberCount; i++) {
        const ember = document.createElement('div');
        ember.className = 'ember click-ember';
        ember.style.left = e.clientX + 'px';
        ember.style.bottom = (window.innerHeight - e.clientY) + 'px';
        ember.style.animationDuration = (Math.random() * 3 + 2) + 's';
        ember.style.animationDelay = (Math.random() * 0.5) + 's';
        
        fireParticles.appendChild(ember);
        setTimeout(() => ember.remove(), 5000);
    }
});

// Intensify fire effect on title hover
const title = document.querySelector('.title-main');
if (title) {
    title.addEventListener('mouseenter', () => {
        const fireGlow = document.querySelector('.fire-glow');
        fireGlow.style.transition = 'all 0.3s ease';
        fireGlow.style.transform = 'translate(-50%, -50%) scale(1.3)';
        fireGlow.style.opacity = '1';
    });
    
    title.addEventListener('mouseleave', () => {
        const fireGlow = document.querySelector('.fire-glow');
        fireGlow.style.transform = 'translate(-50%, -50%) scale(1)';
        fireGlow.style.opacity = '0.6';
    });
}

// Flicker effect on flame emoji
const flame = document.querySelector('.flame');
if (flame) {
    setInterval(() => {
        if (Math.random() > 0.7) {
            flame.style.opacity = '0.7';
            setTimeout(() => { flame.style.opacity = '1'; }, 100);
        }
    }, 2000);
}

// Add dynamic ember generation
function createRandomEmber() {
    const fireParticles = document.querySelector('.fire-particles');
    const ember = document.createElement('div');
    ember.className = 'ember dynamic-ember';
    ember.style.left = Math.random() * 100 + '%';
    ember.style.animationDuration = (Math.random() * 4 + 6) + 's';
    ember.style.animationDelay = '0s';
    
    fireParticles.appendChild(ember);
    setTimeout(() => ember.remove(), 12000);
}

setInterval(createRandomEmber, 3000);

// Keyboard shortcut: press 'F' for fire burst
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'f') {
        const fireGlow = document.querySelector('.fire-glow');
        const fireParticles = document.querySelector('.fire-particles');
        
        fireGlow.style.transition = 'all 0.2s ease';
        fireGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
        fireGlow.style.opacity = '1';
        
        for (let i = 0; i < 15; i++) {
            const ember = document.createElement('div');
            ember.className = 'ember burst-ember';
            ember.style.left = (Math.random() * 100) + '%';
            ember.style.animationDuration = (Math.random() * 2 + 3) + 's';
            fireParticles.appendChild(ember);
            setTimeout(() => ember.remove(), 5000);
        }
        
        setTimeout(() => {
            fireGlow.style.transform = 'translate(-50%, -50%) scale(1)';
            fireGlow.style.opacity = '0.6';
        }, 500);
    }
});

// Add breathing effect to darkness
const darkness = document.querySelector('.darkness');
let breatheIntensity = 0;
setInterval(() => {
    breatheIntensity += 0.02;
    const breath = Math.sin(breatheIntensity) * 0.05 + 1;
    darkness.style.filter = `brightness(${breath})`;
}, 50);

console.log('🔥 FAURI: Denied a Name');
console.log('The fire of identity burns in the darkness...');
console.log('Coming 2026');
console.log('Tip: Press "F" for a fire burst effect');

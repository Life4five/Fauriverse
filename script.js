// Background gradient animation on mouse move
document.addEventListener('mousemove', (e) => {
    const container = document.getElementById('container');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Create dynamic gradient based on mouse position
    const angle = 135 + (mouseX - 0.5) * 30;
    
    // Colors shift based on mouse position
    const color1Opacity = 0.8 + mouseX * 0.2;
    const color2Opacity = 0.6 + mouseY * 0.3;
    
    container.style.background = `linear-gradient(${angle}deg, 
        rgba(15, 25, 35, ${color1Opacity}) 0%, 
        rgba(26, 31, 46, ${color2Opacity}) 25%, 
        rgba(13, 17, 23, 0.9) 50%, 
        rgba(26, 22, 37, ${color2Opacity}) 75%, 
        rgba(10, 14, 26, ${color1Opacity}) 100%)`;
});

// Subtle click ripple effect
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    
    ripple.style.cssText = `
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(94, 179, 214, 0.4) 0%, transparent 70%);
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

console.log('✨ FAURIVERSE - Coming 2026');
console.log('"While the fire burns — the identity exists"');

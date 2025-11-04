// Click ripple effect
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
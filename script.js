document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'slideUp 0.6s ease-out';
        }, 10);
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .timeline-item').forEach(el => {
    observer.observe(el);
});

const authorCredit = document.querySelector('.author-credit');
let mouseX = window.innerWidth / 2;
let mouseY = 20;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateAuthorPosition() {
    const currentX = parseFloat(authorCredit.style.left) || window.innerWidth / 2;
    const currentY = parseFloat(authorCredit.style.top) || 20;
    
    const newX = currentX + (mouseX - currentX) * 0.1;
    const newY = currentY + (mouseY - currentY) * 0.1;
    
    authorCredit.style.left = newX + 'px';
    authorCredit.style.top = newY + 'px';
    authorCredit.style.transform = 'translate(-50%, -50%)';
    
    requestAnimationFrame(updateAuthorPosition);
}

updateAuthorPosition();

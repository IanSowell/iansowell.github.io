// Simple feedback on form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I’ll get back to you soon.');
    this.reset();
});

window.onload = function() {
    const text = document.getElementById('typewriter');
    text.style.animation = 'typewriter 3s steps(20) 1s forwards, blink-caret 0.75s step-end infinite';
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form submission handling (you might want to add actual functionality here)
    alert('Thank you for your message!');
    document.getElementById('contactForm').reset();
});

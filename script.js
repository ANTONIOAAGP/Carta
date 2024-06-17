

document.getElementById('btnSubmit').addEventListener('click', function() {
    var comentario = prompt('Por favor, añade tu comentario:');
    if (comentario !== null && comentario.trim() !== '') {
        alert('Comentario añadido: ' + comentario);
    } else {
        alert('No se añadió ningún comentario.');
    }
});

function makeCall(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

// Example usage: Call the function when clicking a phone link
document.querySelector('a[href^="tel:"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    var phoneNumber = this.getAttribute('href').replace('tel:', '');
    makeCall(phoneNumber);
});


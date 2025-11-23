function verProductos() {
    alert("Sección de productos próximamente 😎");
}

function mostrarEquipo() {
    const seccion = document.getElementById('equipo');
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Nuestro equipo: Ana Gómez, Carlos Pérez, Lucía Ruiz');
    }
}
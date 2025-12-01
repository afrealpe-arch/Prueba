document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensajeEstado = document.getElementById("mensaje-estado");

    mensajeEstado.textContent = `Gracias ${nombre}, tu mensaje fue enviado correctamente.`;
    mensajeEstado.style.color = "green";

    this.reset();
});


$(document).ready(function(){
    // Evento para ocultar el párrafo
    $('#ocultar-btn').click(function(){
        $('#parrafo').hide(500); // Ocultar con animación
        $('#ocultar-btn').hide(); // Ocultar botón de ocultar
        $('#mostrar-btn').show(); // Mostrar botón de mostrar
    });

    // Evento para mostrar el párrafo
    $('#mostrar-btn').click(function(){
        $('#parrafo').show(500); // Mostrar con animación
        $('#mostrar-btn').hide(); // Ocultar botón de mostrar
        $('#ocultar-btn').show(); // Mostrar botón de ocultar
    });
});
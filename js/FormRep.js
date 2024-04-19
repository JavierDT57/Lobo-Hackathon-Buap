  // JavaScript para activar/desactivar el campo de imagen y obtener la ubicación automáticamente
    const placaInput = document.getElementById('placa');
    const ubicacionInput = document.getElementById('ubicacion');
    const imagenInput = document.getElementById('imagen');

    placaInput.addEventListener('input', function() {
      if (placaInput.value.trim() !== '') {
        imagenInput.disabled = false;
      } else {
        imagenInput.disabled = true;
      }
    });

document.addEventListener('DOMContentLoaded', function() {
  const barra = document.querySelector('.barra-ajustable');
  let isDragging = false;

  barra.addEventListener('mousedown', function(e) {
    isDragging = true;
    document.body.style.cursor = 'ns-resize';
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      const newHeight = e.clientY - barra.getBoundingClientRect().top;
      barra.style.height = `${newHeight}px`;
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
    document.body.style.cursor = 'default';
  });
});

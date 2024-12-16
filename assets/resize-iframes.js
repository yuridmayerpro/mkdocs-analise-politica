document.addEventListener("DOMContentLoaded", function() {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(ifrm) {
      ifrm.addEventListener('load', function() {
        try {
          var doc = ifrm.contentWindow.document;
          // Calcula a altura e largura exatas do conteúdo interno
          var newHeight = doc.documentElement.scrollHeight;
          var newWidth = doc.documentElement.scrollWidth;
  
          ifrm.style.width = newWidth + 'px';
          ifrm.style.height = newHeight + 'px';
          ifrm.style.border = 'none';
        } catch(e) {
          console.warn('Não foi possível redimensionar o iframe:', e);
        }
      });
    });
  });
  
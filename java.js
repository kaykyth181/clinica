document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function() {
      // Remove a classe active de todos os links
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      // Adiciona a classe active ao link clicado
      this.classList.add('active');
    });
  });


  
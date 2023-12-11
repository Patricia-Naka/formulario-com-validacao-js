
const camposFormulario = document.querySelectorAll('.input');
const botaoEnviar = document.querySelector('.btn');


botaoEnviar.addEventListener('click', (e) => {
     camposFormulario.forEach(input => {
          e.preventDefault()
          if (input.value !='') {
               input.classList.remove('erro-validacao');
               input.classList.add('campo-preenchido')
               input.nextElementSibling.classList.remove('erro-validacao');
          } else {
               input.classList.add('erro-validacao');
               input.classList.remove('campo-preenchido');
               input.nextElementSibling.classList.add('erro-validacao');

          }
     });
});



const camposFormulario = document.querySelectorAll('.campo');
const botaoEnviar = document.querySelector('.btn');


botaoEnviar.addEventListener('click', (e) => {
     camposFormulario.forEach(input => {
          e.preventDefault()
          if (input.value !='') {
               input.classList.remove('erro');
               input.classList.add('valido')
               input.nextElementSibling.classList.remove('erro');
          } else {
               input.classList.add('erro');
               input.classList.remove('valido');
               input.nextElementSibling.classList.add('erro');b
          }
     });
});


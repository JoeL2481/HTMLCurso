
const formButton = document.getElementById('buttonAdd');


formButton.addEventListener('click', function() {
    const formInput = document.getElementById('textoIngresado');
    const mainResult = document.getElementById('mainAddResult');
  
    const divInside = document.createElement('div');
    const divSpan = document.createElement('span');
    const divSpanButton = document.createElement('input');
  
    divInside.innerHTML = formInput.value;
    divSpanButton.type = 'button';
    divSpanButton.value = 'eliminar';
    divSpanButton.className = 'botonEl';

 

    divSpanButton.addEventListener('click', function() {
      divInside.remove();
      divSpan.remove();
    });
  
    divSpan.appendChild(divSpanButton);
    mainResult.appendChild(divInside);
    mainResult.appendChild(divSpan);
  
    formInput.focus();
   
  });
  

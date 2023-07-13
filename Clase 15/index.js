
const formButton = document.getElementById('buttonAdd');



/*formButton.addEventListener('click',function(){
    const formImput = document.getElementById('textoIngresado');
    const mainResult = document.getElementById('mainAddResult');
    const divInside = document.createElement("div");
    const divSpan = document.createElement("span");
    const divSpanButton =document.createElement('input');
    divInside.innerHTML = formImput.value;
    mainResult.appendChild(divInside);
    mainResult.appendChild(divSpan);
    divSpan.appendChild(divSpanButton);
    divSpanButton.type ='button'
    divSpanButton.value= 'eliminar';
    divSpanButton.className ='botonEl';

     const deleteButton = document.querySelector('.botonEl,span')

    deleteButton.addEventListener('click',function(){
        mainResult.removeChild()
    })


})*/

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
  
   
  });
  

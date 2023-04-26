const btn = document.getElementById('btn');

// se declara el boton que tendra el evento para traer el valor de los inputs

const date = new Date();

// se le da el evento y funcion al boton
btn.addEventListener('click', ()=>{
        // variables con los valores de los inputs
        const valueDay = document.getElementById('valueDay').value;
        const valueMonth = document.getElementById('valueMonth').value;
        const valueYear = document.getElementById('valueYear').value;

        const contenedor = document.getElementById('cont');

        contenedor.innerHTML = `
        <p class="time">${date.getFullYear() - valueYear}  <span>years</span></p>
        <p class="time">${date.getMonth() - valueMonth}  <span>months</span></p>
        <p class="time">${date.getDay() - valueDay}  <span>days</span></p>

        `;

})

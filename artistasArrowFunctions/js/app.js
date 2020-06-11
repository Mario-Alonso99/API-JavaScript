
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const apiKey = '53ae89eb5f3cd54814a53cc2d9085fc4';

     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

     let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${ origenSeleccionado }&api_key=${ apiKey }&format=json`;


     //Crear Fetch
     fetch(url)
          .then(res => res.json())
          .then(artistas => {
               let htmlNombres = `<h2>Top de Artistas</h2>`;
               htmlNombres += `<ul class="lista">`;
               artistas.topartists.artist.forEach(artista => {
                    htmlNombres += `
                         <li><a href='${ artista.url }' target="_blank">${artista.name}</a></li>
                    `;
               })
               htmlNombres += `</ul>`;
               document.querySelector('#resultado').innerHTML = htmlNombres;
          })
          .catch(error => console.log(error))
}
//Created By Ing. Mario Alberto Alonso
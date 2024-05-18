// DOM
// let celdas = document.querySelectorAll('td');

// celdas.forEach(function(td) {
//     td.addEventListener('click', function() {
//         console.log("Hice Click");
//     })
// });

// Obtener los elementos de la clase .home
// let home = document.querySelectorAll('.home');

// Recorrerlos
// home.forEach(function(link) {
//     // Agregar un evento click a cada uno de ellos
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         console.log("Hice click en el enlace");

//         return false;
//     }); 
// });


// Recorriendo iconos de index y modificandolos
// let iconos = document.querySelectorAll('i');

// iconos.forEach(function(icono) {
//     icono.classList.replace('fa-star', 'fa-heart');
// });


// Cambiando animación del contenido

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".close");

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        let content = document.querySelector('.content-game');
        content.classList.replace('animate__backInDown', 'animate__bounceOutUp')

        setTimeout(function() {
            location.href = "./boltines";
        }, 600);

        return false;
    });
})});
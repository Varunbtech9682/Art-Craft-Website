const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});





// card section

//Producto a favoritos
$('.card .aFavs').click(function(){
    $(this).parents('.card').toggleClass('esFav');
  })
  //Producto al carrito
  $('.card .alCarrito').click(function(){
    $(this).parents('.card').toggleClass('enCarrito');
  })





//   nav section

$(document).ready(function() {
  $('html').click(function(){
      $('.nav-dropdown').hide();
  })
  $('#nav-toggle').click(function(){
      $('nav ul').slideToggle();
      $('.nav-bar i').slideToggle();
  })
  $('#nav-toggle').on('click', function(){
      this.classList.toggle('active');
  });
});







// margin top in responsive

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const contenedorCards = document.querySelector('.contenedorCards');
  const para= document.querySelector('.para')

  navToggle.addEventListener('click', function() {
    contenedorCards.classList.toggle('active');
    para.classList.toggle('active');
  });
});



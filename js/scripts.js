(function(){
  var slideIndex = 0;
  // showSlides();


  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonial");
    if(slides){
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "flex";
      setTimeout(showSlides, 3000)
    }else{
      
    }
  }
  var searchbar = document.querySelector('.search-bar');
  if(searchbar) searchbar.onkeyup = function(){    this.value != '' ? document.querySelector('.search-results').style .display = 'block' : document.querySelector('.search-results').style .display = 'none';   }
  document.querySelector("#nav-toggle")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector('.mobile-nav').classList.toggle("visible");
  });
  // MODAL
  var sign_in_buttons = document.querySelectorAll('.btn-sign-in')
  if(sign_in_buttons) sign_in_buttons.forEach(function(button){
    button.addEventListener('click',showModal);
  });
  var backdrops = document.querySelectorAll('.modal .backdrop')
  if(backdrops) backdrops.forEach(function(backdrop){
    backdrop.addEventListener('click',hideModal);
  });
  function hideModal(){
    
    console.log(event);
    if (event.target == this) {
      document.getElementById('modal').style.display = "none";
    }
    
  }
  function showModal(){
    document.getElementById('modal').style.display = "block";
  }

})();

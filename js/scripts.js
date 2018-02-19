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

})();

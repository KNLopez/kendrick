(function(){
  var slideIndex = 0;
  showSlides();


  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonial");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 3000)
  }
  document.querySelector('.search-bar').onkeyup = function(){
    if(this.value != ''){
      document.querySelector('.search-results').style .display = 'block';
    } else{
      document.querySelector('.search-results').style .display = 'none';
    }
    
  }

})();

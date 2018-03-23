function load_templates() {
  var templates = document.querySelectorAll('[data-template]');
  templates.forEach(function(dom){
    var temp = dom.dataset.template
    fetch_text(temp+".html").then((html) => {
      document.querySelector(temp).innerHTML = html;
    }).catch((error) => {
      console.warn(error);
    });
  })
  loadMain(modal);
}

function fetch_text(url) {
  return fetch(url).then((response) => (response.text()));
}

function loadMain(modal){
  document.addEventListener('click', function (e) {
    //modal
    if (e.target.classList.contains('modal-link')) {
      var id = e.target.dataset.target;
      modal.showModal(id);
    }else if(e.target.classList.contains('backdrop')){
      var id = e.target.parentElement.id
      modal.hideModal(id);
    }
    //navigation
    if (e.target.id === "nav-toggle"){
      document.querySelector('.mobile-nav').classList.toggle("visible");
    }

    if (e.target.classList.contains('mobile-dropdown')){
      console.log("dropdown");
      e.target.nextElementSibling.classList.toggle("visible");

    }
  })

  //search
  document.addEventListener('keyup',function(e){

  })


  //slides
  var slideIndex = 0;
  showSlides();
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonial");
    if (slides) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "flex";
      setTimeout(showSlides, 3000)
    } else {
    }
  }
}

//modal code
var modal = (function(){
  return{
    showModal: function(id){
      document.getElementById(id).style.display = "block";
    },
    hideModal: function(id){
      document.getElementById(id).style.display = "none";
    }
  }
})();

//scroll
var scrollElement = (function(){


})();
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
var view = document.getElementById("view");
if (view) {
  view.addEventListener('click', () => {
    scrollTo(document.getElementById("journey"));
  });
}


load_templates();

  // var loadmain = (function(){
  //   var slideIndex = 0;
  //     // showSlides();


  //     function showSlides() {
  //       var i;
  //       var slides = document.getElementsByClassName("testimonial");
  //       if (slides) {
  //         for (i = 0; i < slides.length; i++) {
  //           slides[i].style.display = "none";
  //         }
  //         slideIndex++;
  //         if (slideIndex > slides.length) { slideIndex = 1 }
  //         slides[slideIndex - 1].style.display = "flex";
  //         setTimeout(showSlides, 3000)
  //       } else {
  //       }
  //     }
  //     var searchbar = document.querySelector('.search-bar');
  //     if (searchbar) searchbar.onkeyup = function () { this.value != '' ? document.querySelector('.search-results').style.display = 'block' : document.querySelector('.search-results').style.display = 'none'; }
  //     document.querySelector("#nav-toggle")
  //       .addEventListener("click", function () {
  //         this.classList.toggle("active");
  //         document.querySelector('.mobile-nav').classList.toggle("visible");
  //       });
  //     // MODAL


  //     document.addEventListener('click',function(e){
  //       console.log(e.traget)
  //       if(e.target.classList.contains('btn-sign-in')){
  //         showModal();
  //       }
  //     })

      // var backdrops = document.querySelectorAll('.modal .backdrop')
      // if (backdrops) backdrops.forEach(function (backdrop) {
      //   backdrop.addEventListener('click', hideModal);
      // });
  //     function hideModal() {
  //       console.log(event);
  //       if (event.target == this) {
  //         document.getElementById('modal').style.display = "none";
  //       }
  //     }
  //     function showModal() {
  //       document.getElementById('modal').style.display = "block";
  //     }
  //     //scroll


  // };



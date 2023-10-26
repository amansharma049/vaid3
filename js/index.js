function nav(){
  document.getElementById("links").classList.toggle('Navactive');
  // document.getElementById("nav-bar").style.display="none";
  // document.getElementById("nav-barclose").style.display="block";
}
// slide gallery
let sliderRight = document.querySelector("#right_slider");
let sliderLeft = document.querySelector("#left_slider");
let images = document.querySelectorAll(".single_img");

imgNumber = 0;

sliderRight.addEventListener("click", function () {
  images.forEach((image) => {
    image.style.display = "none";
  });
  imgNumber++;
  if (imgNumber === images.length) {
    imgNumber = 0;
  }
  images[imgNumber].style.display = "block";
});

sliderLeft.addEventListener("click", function () {
  images.forEach((image) => {
    image.style.display = "none";
  });
  imgNumber--;
  if (imgNumber === -1) {
    imgNumber = images.length - 1;
  }
  images[imgNumber].style.display = "block";
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    // document.getElementById("navbar").style.backgroundColor = "white";
    // document.getElementById("links").style.backgroundColor = "white";
    // document.getElementById("navbar").style.boxShadow = "1px 10px 15px #ccc";
  }else{
    // document.getElementById("navbar").style.backgroundColor = "transparent";
    // document.getElementById("links").style.backgroundColor = "transparent";
    // document.getElementById("navbar").style.boxShadow = "none";

  }
}

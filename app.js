function myFunction() {
  var x = document.getElementById("hamb-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
}



var checkbox = document.getElementById("btn-ill");
var text = document.getElementById("ill-text");
var back = document.getElementById("ill");
let h = 0;

checkbox.addEventListener("click", function () {
  if (h === 0) {
    text.textContent = "GraphicDesigner";
    text.style.fontSize="16.3px"
    h = 1;
  }
  
  else {
    text.textContent = "ILLUSTRATOR";
  text.style.fontSize="19px"
 
    h = 0;
  }
});


//pricing
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[i].classList.add('active');
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}


var click = document.getElementById("background");
var videoElement = document.getElementById("myVideo");

let inde = 0;
const movieList = [
    "video/hello.mp4",
    "video/video (3).mp4",
    "video/videoA (5).mp4",
    "video/back (1).mp4"
];

click.addEventListener('click', function() {
    inde++;
    if (inde >= movieList.length) {
        inde = 0;
    }
    videoElement.src = movieList[inde];
    videoElement.play();
});


  window.addEventListener('scroll', function () {
    const scrolling = document.getElementById('arrow-img');
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

    const isDesktop = window.innerWidth >= 768;

    if (scrollPercentage > 90) {
      scrolling.style.transform = 'rotate(180deg)';
    } else if (scrollPercentage > 80) {
      scrolling.style.transform = 'rotate(160deg)';
    }
     else if (scrollPercentage > 70) {
      scrolling.style.transform = 'rotate(140deg)';
    }
     else if (scrollPercentage > 60) {
      scrolling.style.transform = 'rotate(120deg)';
    }
     else if (scrollPercentage > 50) {
      scrolling.style.transform = 'rotate(100deg)';
    }
     else if (scrollPercentage > 40) {
      scrolling.style.transform = 'rotate(80deg)';
    } else if (scrollPercentage > 30) {
      scrolling.style.transform = 'rotate(60deg)';
    }
     else if (scrollPercentage > 20) {
      scrolling.style.transform = 'rotate(40deg)';
    }
     else if (scrollPercentage > 10) {
      scrolling.style.transform = 'rotate(20deg)';
    } else if (scrollPercentage > 0) {
      scrolling.style.transform = 'rotate(0deg)';
    }
  });

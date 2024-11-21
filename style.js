document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function(menuItem) {
      menuItem.addEventListener("mouseover", function() {
        const submenu = this.querySelector(".submenu");
        if (submenu) {
          submenu.style.display = "block";
        }
      });
  
      menuItem.addEventListener("mouseout", function() {
        const submenu = this.querySelector(".submenu");
        if (submenu) {
          submenu.style.display = "none";
        }
      });
    });
  });

  var icon = document.querySelector('.menu-icon');
  var section = document.querySelector('.sidebar');
  var cancelIcon = document.querySelector('.cancel');
  
  icon.addEventListener('click', function() {
      if (section.style.display === 'none' || !section.style.display) {
          section.style.display = 'flex';
          cancelIcon.style.display = 'block';
      } else {
          section.style.display = 'none';
          cancelIcon.style.display = 'none';
      }
  });
  var cancelIcon = document.querySelector('.cancel');
  var section = document.querySelector('.sidebar');
  
  cancelIcon.addEventListener('click', function() {
      section.style.display = 'none';
  });
  var cancelIcon = document.querySelector('.cancel');
  var section = document.querySelector('.sidebar');
  
  cancelIcon.addEventListener('click', function() {
      section.style.display = 'none';
      cancelIcon.style.display = 'none';
  });

  let slideIndex = 0;
let slides = document.getElementsByClassName("Slides");
let dots = document.getElementsByClassName("dot");
let autoChangeInterval = setInterval(changeSlide, 5000); 

document.addEventListener("wheel", function(event) {
    clearInterval(autoChangeInterval); 
    if (event.deltaY > 0) {
        showSlides(1); 
    } else {
        showSlides(-1); 
    }

    autoChangeInterval = setInterval(changeSlide, 5000); 
});

function showSlides(direction) {
    slides[slideIndex].style.display = "none";
    
    slideIndex += direction;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block";
    
    updateDots();
}

function changeSlide() {
    showSlides(1); 
}

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
} 

showSlides(0);

let slideIndex2 = 0; 
showSlides2();

function showSlides2() {
    let slides2 = document.getElementsByClassName("img-slides");
    let dots = document.getElementsByClassName("dot2");
    
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none"; 
        dots[i].classList.remove("active2"); 
        dots[i].style.backgroundColor = "#bbb";
    }

    slideIndex2++; 
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0; 
    }

    slides2[slideIndex2].style.display = "block"; 
    dots[slideIndex2].style.backgroundColor = "#717171";
    setTimeout(showSlides2, 4000); 
}

function plusSlides2(n) {
    slideIndex2 += n; 
    let slides2 = document.getElementsByClassName("img-slides");
    
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0; 
    } else if (slideIndex2 < 0) {
        slideIndex2 = slides2.length - 1; 
    }

    showSlidesManually(slideIndex2); 
}

function showSlidesManually(index) {
    let slides2 = document.getElementsByClassName("img-slides");
    let dots = document.getElementsByClassName("dot2");

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none"; 
        dots[i].classList.remove("active2"); 
        dots[i].style.backgroundColor = "#bbb"; 
    }

    slides2[index].style.display = "block"; 
    dots[index].style.backgroundColor = "#717171"; 
}

const scrollToTopButton = document.querySelector('.scrolltotop');
const support = document.querySelector('.support');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add('show');
        support.style.right = "70"; 
    } else {
        scrollToTopButton.classList.remove('show');
        support.style.right = "50px"; 
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


const scrollToDownButtons = document.querySelectorAll('.scrolltodown');
let scrollEnabled = false; 

scrollToDownButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!scrollEnabled) {
            scrollEnabled = true; 
            
            const target = document.querySelector('.services');
            target.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    });
});


window.addEventListener('wheel', (event) => {
    if (!scrollEnabled) {
        event.preventDefault(); 
    }
}, { passive: false });

window.addEventListener('scroll', () => {

    if (window.scrollY === 0) {
        scrollEnabled = false;
    }
});

window.onload = function() {

    window.scrollTo(0, 0);

};


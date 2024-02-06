

function locoMotive() {
  const scroll = new LocomotiveScroll({
    el: document.getElementById("main"),
    smooth: true,
    getDirection: true,

  })

  scroll.on("scroll", (instance) => {
    if (instance.direction == "down") {
      document.querySelector('.logo').style.opacity = "0"
    }

    if (instance.scroll.y < 100) {
      document.querySelector('.logo').style.opacity = "1"
    }


  })
}

locoMotive();

function swiperInit() {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    //   autoplay: {

    //     disableOnInteraction: false
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
}





function textAnimation() {
  let elements = document.querySelectorAll(".animation-container");
  elements = Array.from(elements);
  elements.forEach(element => {
    let arrOfText = element.textContent.split(" ");
    let spantwo = document.createElement("span");

    element.innerHTML = " "
    for (let i = 0; i < arrOfText.length; i++) {
      let span = document.createElement("span");;
      let containerspan = document.createElement("span");;
      containerspan.classList.add("containerspan")
      span.innerHTML = arrOfText[i];
      containerspan.appendChild(span)
      element.appendChild(containerspan)
    }

  });
}


window.onload = () => {
  let array = Array.from(document.querySelectorAll(".containerspan span"));

  array.forEach((e, index) => {
    setTimeout(() => {
      e.style.top = "0"
      e.style.transitionDelay = (0.1 * index) + "s";
    }, 500); // Adjust the delay for each span
  });
};

function addMoreLeft(sectionWrapper, element) {
  let swiperContainer = sectionWrapper.style.left;
  let absoluteValue = Math.abs(parseInt(swiperContainer)); // Convert to integer and make it positive
  sectionWrapper.style.left = "0px";
 
  element.style.left = `${absoluteValue - 50}px`;
}


if (window.innerWidth > 768) {
  textAnimation();
}
function sliders(sectionwrapper, sectionnavigation) {
  let prev = sectionnavigation.children[0];
  let next = sectionnavigation.children[1];

  let referenceChild = sectionwrapper.firstElementChild;
  let width = referenceChild.offsetWidth; // Use offsetWidth instead of clientWidth
  let currentPosition = 0; // Track current position

  // Function to center the slider on mobile
  function centerSlider() {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      let containerWidth = sectionwrapper.offsetWidth;
      let newPosition = (containerWidth - width) / 2;
      sectionwrapper.style.left = `-${newPosition}px`;
      currentPosition = newPosition;
    } else {
      sectionwrapper.style.left = '0px'; // Start from the first element
      currentPosition = 0;
    }
  }

  // Center the slider initially and when the window is resized
  centerSlider();
  window.addEventListener('resize', centerSlider);

  prev.addEventListener('click', () => {
    if (currentPosition < 0) { // Ensure currentPosition is within bounds
      currentPosition += width;
      sectionwrapper.style.transition = 'left 0.3s ease-in-out';
      sectionwrapper.style.left = `${currentPosition}px`; // Use positive value to move left
    }
  });

  next.addEventListener('click', () => {
    if (currentPosition <= -(sectionwrapper.children.length - 1) * width) {
      currentPosition = 0; // Reset to the first element when reaching the end

    } else {
      currentPosition -= width;
      sectionwrapper.style.transition = 'left 0.3s ease-in-out';
      sectionwrapper.style.left = `${currentPosition}px`; // Use negative value to move right
    }
  });
}




try {
  locoMotive();
} catch (error) {
  console.error('Error in locoMotive:', error);
}

try {
  swiperInit();
} catch (error) {
  console.error('Error in swiperInit:', error);
}

try {

} catch (error) {
  console.error('Error in textAnimation:', error);
}


try {
  let sectionwrapper = document.getElementById("section-wrapper");
  let sectionnavigation = document.getElementById("section-navigation");
  let sectionwrappertwo = document.getElementById("section-wrapper-two");
  let sectionnavigationtwo = document.getElementById("section-navigation-two");
  sliders(sectionwrapper, sectionnavigation);
  sliders(sectionwrappertwo, sectionnavigationtwo);
} catch (error) {
  console.error('Error in sliders:', error);
}

try {
  let sectionWrapper = document.getElementById("section-wrapper");
  let sectionWrappertwo = document.getElementById("section-wrapper-two");
  let sectionElementtwo = document.getElementById("section-container-two");
  let sectionElement = document.getElementById("section-container");
  addMoreLeft(sectionWrapper,sectionElement);
  addMoreLeft(sectionWrappertwo,sectionElementtwo);
} catch (error) {
  console.error('Error in addMoreLeft:', error);
}


function gallary(){
  let gallarySection = Array.from(document.querySelector('.gallary_layout_one').children);
  gallarySection.forEach((e , index)=>{
    e.addEventListener('click', ()=>{
      let img = e.children[0];
      
    })
  })
}

gallary()

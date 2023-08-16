//Swiper Slider//
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  //Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0); 
})

  //Responsive navigation menu toaale
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

//Responsive navigation bar for projects
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
  let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
  //console.log("1,",scrollLeftValue);
  let scrolllabelWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
  //console.log("2",scrolllabelWidth);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
  btnRight.style.display = scrolllabelWidth > scrollLeftValue ? "block" : "none";
}

btnLeft.addEventListener("click", () => {
  tabMenu.scrollLeft -= 150;
  //IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

btnRight.addEventListener("click", () => {
  tabMenu.scrollLeft += 150;
  //IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

window.onload = function(){
  btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}


window.onresize = function(){
  btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
  
  
  let scrollLeftValue = Meth.round(tabMenu.scrollLeft);

  btnLeft.style.display = scrollLeftValue > 0 ? "block"  : "none";
}

// Javascript to maike the tab navigation draggable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  IconVisibility();
  tabMenu.classList.add("dragging");
});

tabMenu.addEventListener("mousedown", () => {
  activeDrag = true;
})


document.addEventListener("mouseup", () => {
  activeDrag = false;
  tabMenu.classList.remove("dragging");
});

//Javascript to view the tab contents on click tab buttons

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
  tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
  })

  tabs.forEach((tab) => {
      tab.classList.remove("active");
  })

  tabBtns[tabBtnClick].classList.add("active");
  tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tab_Nav(i);
  })
})












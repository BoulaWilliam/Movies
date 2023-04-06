// Collapse Function
let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle('hide');

    navBar = document.querySelector(".form-content");
    navBar.classList.toggle('hide');
}

// Login and Register Functions
let wrapper = document.querySelector(".wrapper");
let login = document.querySelector(".login-link");
let register = document.querySelector(".register-link");

register.addEventListener("click", ()=> {
    wrapper.classList.add('active');
})

login.addEventListener("click", ()=> {
    wrapper.classList.remove('active');
})

// Login-btn function
let btnPopup0 = document.querySelector(".Login-btn");
btnPopup0.addEventListener("click", ()=> {
    wrapper.classList.add('active-popup');
});

// Login-btn2 function
let btnPopup = document.querySelector(".Login-btn2");
btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add('active-popup');
});

// // close icon function
let iconClose0 = document.querySelector(".icon-close");

iconClose0.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup");
});
// // --------------------------------------------
// video slider
function videoUrl(hm) {
    document.getElementById('slider').src = hm;
}


// Slider 1
// // --------------------
const carousel = document.querySelector('.carousel');
let isDragStart = false, prevPageX, prevScrollLeft;
// Drag Start
const dragStart = (e) => {
    // Updating Global Variables Value On Mouse Down Event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
// Dragging
const dragging = (e) => {
    // Scrolling Images/Carousel to left according to mouse pointer When You Catch It
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevPageX - positionDiff;
}
// Drag Stop
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener('mousedown',dragStart);
carousel.addEventListener('touchdown',dragStart);
carousel.addEventListener('mousemove',dragging);
carousel.addEventListener('touchmove',dragging);
carousel.addEventListener('mouseup',dragStop);
carousel.addEventListener('mouseleave',dragStop);
carousel.addEventListener('touchend',dragStop);

//  Add Event To The left And Right Buttons 
arrowIcons = document.querySelectorAll('.slider i');
firstImg =  document.querySelectorAll('img')[0];
let firstImgWidth = firstImg.clientWidth + 25 // get first img width & adding 25 margin value
// If you Clicked On left btn it will Reduce width value From the carousel (-25) 
// If you Clicked On Right btn it will Add width value To the carousel (+25)
arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.id == "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});



// Slider 2
// --------------------
const carousel2 = document.querySelector('.carousel2');
let isDragStart2 = false, prevPageX2, prevScrollLeft2;
// Drag Start
const dragStart2 = (x) => {
    // Updating Global Variables Value On Mouse Down Event
    isDragStart2 = true;
    prevPageX2 = x.pageX || x.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
}
// Dragging
const dragging2 = (x) => {
    // Scrolling Images/Carousel to left according to mouse pointer When You Catch It
    if(!isDragStart2) return;
    x.preventDefault();
    carousel2.classList.add("dragging2");
    let positionDiff = (x.pageX || x.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevPageX2 - positionDiff;
}
// Drag Stop
const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging2");
}
carousel2.addEventListener('mousedown',dragStart2);
carousel2.addEventListener('touchdown',dragStart2);
carousel2.addEventListener('mousemove',dragging2);
carousel2.addEventListener('touchmove',dragging2);
carousel2.addEventListener('mouseup',dragStop2);
carousel2.addEventListener('mouseleave',dragStop2);
carousel2.addEventListener('touchend',dragStop2);

//  Add Event To The left And Right Buttons 
arrowIcons = document.querySelectorAll('.slider2 i');
firstImg =  document.querySelectorAll('img')[0];
let firstImgWidth2 = firstImg.clientWidth + 25 // get first img width & adding 25 margin value
// If you Clicked On left btn it will Reduce width value From the carousel (-25) 
// If you Clicked On Right btn it will Add width value To the carousel (+25)
arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.id == "left2") {
            carousel2.scrollLeft -= firstImgWidth;
        } else {
            carousel2.scrollLeft += firstImgWidth;
        }
    });
});

// Slide 3
// --------------------
const carousel3 = document.querySelector('.carousel3');
let isDragStart3 = false, prevPageX3, prevScrollLeft3;
// Drag Start
const dragStart3 = (c) => {
    // Updating Global Variables Value On Mouse Down Event
    isDragStart3 = true;
    prevPageX3 = c.pageX || c.touches[0].pageX;
    prevScrollLeft3 = carousel3.scrollLeft;
}
// Dragging
const dragging3 = (c) => {
    // Scrolling Images/Carousel to left according to mouse pointer When You Catch It
    if(!isDragStart3) return;
    c.preventDefault();
    carousel2.classList.add("dragging3");
    let positionDiff = (c.pageX || c.touches[0].pageX) - prevPageX3;
    carousel3.scrollLeft = prevPageX3 - positionDiff;
}
// Drag Stop
const dragStop3 = () => {
    isDragStart3 = false;
    carousel3.classList.remove("dragging3");
}
carousel3.addEventListener('mousedown',dragStart3);
carousel3.addEventListener('touchdown',dragStart3);
carousel3.addEventListener('mousemove',dragging3);
carousel3.addEventListener('touchmove',dragging3);
carousel3.addEventListener('mouseup',dragStop3);
carousel3.addEventListener('mouseleave',dragStop3);
carousel3.addEventListener('touchend',dragStop3);

//  Add Event To The left And Right Buttons 
arrowIcons = document.querySelectorAll('.slider3 i');
firstImg =  document.querySelectorAll('img')[0];
let firstImgWidth3 = firstImg.clientWidth + 25 // get first img width & adding 25 margin value
// If you Clicked On left btn it will Reduce width value From the carousel (-25) 
// If you Clicked On Right btn it will Add width value To the carousel (+25)
arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.id == "left3") {
            carousel3.scrollLeft -= firstImgWidth;
        } else {
            carousel3.scrollLeft += firstImgWidth;
        }
    });
});



// Slide 4
// --------------------
const carousel4 = document.querySelector('.carousel4');
let isDragStart4 = false, prevPageX4, prevScrollLeft4;
// Drag Start
const dragStart4 = (z) => {
    // Updating Global Variables Value On Mouse Down Event
    isDragStart4 = true;
    prevPageX4 = z.pageX || z.touches[0].pageX;
    prevScrollLeft4 = carousel4.scrollLeft;
}
// Dragging
const dragging4 = (z) => {
    // Scrolling Images/Carousel to left according to mouse pointer When You Catch It
    if(!isDragStart4) return;
    z.preventDefault();
    carousel4.classList.add("dragging4");
    let positionDiff = (z.pageX || z.touches[0].pageX) - prevPageX4;
    carousel4.scrollLeft = prevPageX4 - positionDiff;
}
// Drag Stop
const dragStop4 = () => {
    isDragStart4 = false;
    carousel4.classList.remove("dragging4");
}
carousel4.addEventListener('mousedown',dragStart4);
carousel4.addEventListener('touchdown',dragStart4);
carousel4.addEventListener('mousemove',dragging4);
carousel4.addEventListener('touchmove',dragging4);
carousel4.addEventListener('mouseup',dragStop4);
carousel4.addEventListener('mouseleave',dragStop4);
carousel4.addEventListener('touchend',dragStop4);

//  Add Event To The left And Right Buttons 
arrowIcons = document.querySelectorAll('.slider4 i');
firstImg =  document.querySelectorAll('img')[0];
let firstImgWidth4 = firstImg.clientWidth + 25 // get first img width & adding 25 margin value
// If you Clicked On left btn it will Reduce width value From the carousel (-25) 
// If you Clicked On Right btn it will Add width value To the carousel (+25)
arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.id == "left4") {
            carousel4.scrollLeft -= firstImgWidth;
        } else {
            carousel4.scrollLeft += firstImgWidth;
        }
    });
});
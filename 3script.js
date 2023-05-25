// let b = document.querySelector('button')
// let hh = document.querySelector('.hhh1')
// b.addEventListener('click', () => {
//     hh.style.display = "block"
// })
let bb1 = document.querySelector("#b1")
let bb2 = document.querySelector("#b2")
let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")
let slidennn = 0
let slidennn2 = 0
let slidennn3 = 0
let color = ["aqua", "deeppink", "darkred", "coral", "chocolate"]
let slide = document.querySelector(".slide")
slides[0].classList.add('active')
dots[0].classList.add('active')
bb1.addEventListener('click', () => {
    slidennn2 = slidennn
    slidennn = slidennn - 1
    if (slidennn <= -1){
        slidennn = 4
    }
    slide.style.backgroundColor = "red";
    dots[slidennn2].classList.remove('active')
    dots[slidennn].classList.add('active')
    slides[slidennn2].classList.remove('active')
    slides[slidennn].classList.add('active')
})
bb2.addEventListener('click', () => {
    slidennn3 = slidennn
    slidennn = slidennn + 1
    if (slidennn >= 5){
        slidennn = 0
    }
    slide.style.backgroundColor = "red";
    dots[slidennn3].classList.remove('active')
    dots[slidennn].classList.add('active')
    slides[slidennn3].classList.remove('active')
    slides[slidennn].classList.add('active')
})
const imgs = document.getElementById('imgs')
const middleBtn = document.getElementById('middle')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')
const images=[
    '/assets/1.svg'
]
const btn=document.querySelectorAll(".btn img ");
let idx = 0
const totalImages = images.length;


let interval = setInterval(run, 2000)

function run() {
    idx = (idx + 1) % 3;
    changeImage()
}

function changeImage() {

    imgs.style.transform = `translateX(${-idx *190}px)`
    btn.src=images[0];
}
// -idx * 
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx = (idx + 1) %3;
    changeImage()
    resetInterval()
})

middleBtn.addEventListener('click', () => {
    idx = (idx - 1 + 4) % 3;
    changeImage()
    resetInterval()
})

// Popup form
function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
// animation
window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll(".animated");
    sections.forEach(function(section) {
        if (isElementInViewport(section)) {
            section.classList.add("slide-in-right");
        } else {
            section.classList.remove("slide-in-right");
        }
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
ScrollReveal({
     reset: true,
    distance:'50px',
    duration:1000,
    delay:200
 });
//  ScrollReveal().reveal('.heading', { delay: 200, origin:'bottom' });
 ScrollReveal().reveal('.main .right', { delay: 200, origin:'left' });
 ScrollReveal().reveal('.main .left', { delay: 200, origin:'right' });
 ScrollReveal().reveal('.services-heading', { delay: 200, origin:'top' });
 ScrollReveal().reveal('.sections h1', { delay: 200, origin:'left' });
 ScrollReveal().reveal('.sections p', { delay: 200, origin:'right' });
 ScrollReveal().reveal('.heading h1', { delay: 200, origin:'right' });
 ScrollReveal().reveal('.heading h3', { delay: 200, origin:'left' });
 ScrollReveal().reveal('.imagee', { delay: 200, origin:'top' });
 ScrollReveal().reveal('.content', { delay: 200, origin:'bottom' });
 ScrollReveal().reveal('.text img', { delay: 200, origin:'top' });
 ScrollReveal().reveal('.text p', { delay: 200, origin:'bottom' });
 ScrollReveal().reveal('.footer img', { delay: 200, origin:'bottom' });
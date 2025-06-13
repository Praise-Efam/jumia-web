/*document.addEventListener("DOMContentLoaded", () =>{
const images=
document.querySelectorAll(".carousel-image");
let currentIndex=0;

function showImage(index){
    images.forEach((img, i) => {
        img.classList.toggle("hidden", i !== index);
    });
}
function starCarousel(){
    showImage(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex+1) % images.lenght;
        showImage(currentIndex);
    }, 5000);
}
startCarousel();
});*/


const carousel= document.getElementById("carousel");
const totalSlides = carousel.children.length;
let index =0;

setInterval(() =>{
    index =(index+1) % 
    totalSlides;
    carousel.style.transform= `translateX(-${index*80}%)`;
}, 5000)



const links= document.querySelectorAll('footer a');
links.forEach(link=> {
    link.addEventListener('click', ()=>{
        links.forEach(l=> l.classList.remove('text-blue-600'));
        links.forEach(l=> l.classList.add('text-black'));
        link.classList.remove('text-black');
        link.classList.add('text-blue-500');
    });
});
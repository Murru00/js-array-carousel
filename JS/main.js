console.log('JS OK');

const slideContainerElement = document.getElementById('slideContainer');
const arrowUpButton = document.querySelector('.arrow-up');
const arrowDownButton = document.querySelector('.arrow-down');



// IMG ARRAY
const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let photoView = 0;

let immaginiHtml = '';

for (let i = 0; i < slides.length; i++) {

    const slide = slides[i];

    let attivaClass;
    if (i == photoView) {
        attivaClass = 'attiva';
    } else {
        attivaClass = '';
    }

    immaginiHtml += `<img src="./img/${slide}" alt="" class="slide ${attivaClass}"/>`;

}

// BOTTON ARROW-UP
arrowUpButton.addEventListener('click', function () {

    const currentPhoto = document.querySelector('.slide.attiva');
    currentPhoto.classList.remove('attiva');


    if (photoView >= slides.length - 1) {
        photoView = 0;
    } else {
        photoView++;
    }

    const otherPhoto = document.getElementsByClassName('slide');
    const newPhoto = otherPhoto[photoView];
    newPhoto.classList.add('attiva');
});


//BOTTON ARROW-DOWN
arrowDownButton.addEventListener('click', function () {
    
    const currentPhoto = document.querySelector('.slide.attiva');
    currentPhoto.classList.remove('attiva');


    if (photoView <= 0) {
        photoView = slides.length - 1;
    } else {
        photoView--;
    }

    const otherPhoto = document.getElementsByClassName('slide');
    const newPhoto = otherPhoto[photoView];
    newPhoto.classList.add('attiva');
});




//SET INTERVAL (INTERVALLO FOTO 3 SECONDI)

setInterval(function () {
    const currentFoto = document.querySelector('.slide.attiva');
    currentFoto.classList.remove('attiva');

    if (photoView >= slides.length - 1) {
        photoView = 0;

    } else {
        photoView++;
    }

    const altraFoto = document.getElementsByClassName('slide');
    const newFoto = altraFoto[photoView];
    newFoto.classList.add('attiva');

}, 3000);
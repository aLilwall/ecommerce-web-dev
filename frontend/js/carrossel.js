function initiateCarrosselMid() {
    const images = document.querySelectorAll('.carrossel-mid img');
    let i = 1;

    setInterval(() => {
        images[i].classList.remove('active');
        i = (i + 1) % images.length;
        images[i].classList.add('active');
    }, 3000)
}

function initiateCarrosselLeft() {
    const images = document.querySelectorAll('.carrossel-left img');
    let i = 0;

    setInterval(() => {
        images[i].classList.remove('active');
        i = (i + 1) % images.length;
        images[i].classList.add('active');
    }, 3000)
}

function initiateCarrosselRight() {
    const images = document.querySelectorAll('.carrossel-right img');
    let i = 2;

    setInterval(() => {
        images[i].classList.remove('active');
        i = (i + 1) % images.length;
        images[i].classList.add('active');
    }, 3000)
}

window.onload = () => {
    initiateCarrosselLeft();
    initiateCarrosselMid();
    initiateCarrosselRight();
};
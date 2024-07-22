let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    items[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + items.length) % items.length;

    items[currentIndex].classList.add('active');
    const offset = -currentIndex * (100 / items.length);
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-item')[0].classList.add('active');
});

/*
function moveCarousell(direction) {
    const items1 = document.querySelectorAll('.carousel-slide');
    const totalItems = items1.length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    const offset = -currentIndex * 100 / totalItems;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-slide')[0].classList.add('active');
});
*/

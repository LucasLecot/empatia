const loader = document.querySelector('.loader-pill');
const content = document.querySelector('.content');
const load = document.querySelector('.loader');

setTimeout( () => {
    loader.style.opacity = "0";
    content.style.opacity = "1";
    loader.style.display = "none";
    loader.remove();
    load.classList.remove("loader");
}, 100);
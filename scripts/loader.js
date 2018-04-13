const loader = document.querySelector('.loader-pill');
const content = document.querySelector('.content');

setTimeout(() => {
    console.log("e");
    loader.style.opacity = "0";
    content.style.opacity = "1";
    loader.style.display = "none";
}, 5500);
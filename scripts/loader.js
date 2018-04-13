const loader = document.querySelector('.loader-pill');

const load = document.querySelector('.loader');

setTimeout( () => {
    loader.style.opacity = "0";
    loader.style.display = "none";
    loader.remove();
    load.classList.remove("loader");
}, 8000);


function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            $(element).append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

$( document ).ready(function() {
    var speed = 100;
    var delay = $('#dystopieH2').text().length * speed + speed;
    typeEffect($('#dystopieH2'), speed);
    setTimeout(function(){
        $('#dystopieP').css('display', 'inline-block');
        typeEffect($('#dystopieP'), speed);
    }, delay);
});
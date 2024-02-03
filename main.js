let url = getComputedStyle(document.body).backgroundImage;
let url1 = getComputedStyle(document.querySelector('.card1')).backgroundImage;
let cards = document.querySelector('.cards');
function img(evt) {
    switch(evt.target.classList[0]) {
        case 'card1':
            setTimeout(function() {
                document.body.style.backgroundImage = getComputedStyle(document.querySelector('.card1')).backgroundImage;
            }, 500)
            break;
        case 'card2':
            setTimeout(function() {
                document.body.style.backgroundImage = getComputedStyle(document.querySelector('.card2')).backgroundImage;
            }, 500)
            break;
        case 'card3':
            setTimeout(function() {
                document.body.style.backgroundImage = getComputedStyle(document.querySelector('.card3')).backgroundImage;
            }, 500)
            break;
        case 'card4':
            setTimeout(function() {
                document.body.style.backgroundImage = getComputedStyle(document.querySelector('.card4')).backgroundImage;
            }, 500)
            break;
        case 'cards':
            setTimeout(function() {
                document.body.style.backgroundImage = url;
            }, 500)
            break;
        default:
            setTimeout(function() {
                document.body.style.backgroundImage = getComputedStyle(evt.target.parentElement).backgroundImage;
            }, 500)

        
    }
}
cards.addEventListener('mouseover', img);
cards.addEventListener('mouseleave', function() {
    setTimeout(function() {
        document.body.style.backgroundImage = url;
    }, 500)
});
cards.addEventListener('click', function(evt) {
    switch(evt.target.classList[0]) {
        case 'card1':
            url = getComputedStyle(document.querySelector('.card1')).backgroundImage;
            break;
        case 'card2':
            url = getComputedStyle(document.querySelector('.card2')).backgroundImage;
            break;
        case 'card3':
            url = getComputedStyle(document.querySelector('.card3')).backgroundImage;
            break;
        case 'card4':
            url = getComputedStyle(document.querySelector('.card4')).backgroundImage;
            break;
        default:
            url = getComputedStyle(evt.target.parentElement).backgroundImage;
    }
})

let lightness = document.querySelector('#lightness');
lightness.addEventListener('input', () => {
    document.querySelector('.container').style.background = `rgba(0, 0, 0, ${lightness.value/100})`;
})

document.querySelector('.input .material-symbols-outlined').onclick = function() {
    url = "url('img/img0.jpg')";
    document.body.style.backgroundImage = "url('img/img0.jpg')";
    lightness.value = 50;
    document.querySelector('.container').style.background = `rgba(0, 0, 0, .5)`;
    
}

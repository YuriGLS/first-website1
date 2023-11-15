//config slides
const swiper = new Swiper('.swiper', {
    spaceBetween: 100,
    slidePerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    }
});


// config letra

var tit = document.title;
var c = 0;

function writetitle () {
    document.title = tit.substring(0,c);
    if(c==tit.length)
    {
    c = 0;
    setTimeout("writetitle()" , 1000)

        }
    else {
    c++;
    setTimeout("writetitle()" , 200)
    }
}

writetitle()

var waypoint = new Waypoint({
    element: document.getElementById('body'),
    handler: function (direction) {
    }
})

// animations with second container

$(document).ready(function () {
    // animation with frist content
    $('.at').each(function () {
        var element = $(this);
        new Waypoint({
            element: element[0],
            handler: function (direction) {
                element.addClass('animated fadeInDownBig');
                element.removeClass('ain');
            },
            offset: '650'
        });
    });
    $('.t2').each(function () {
        var element = $(this);
        new Waypoint({
            element: element[0],
            handler: function (direction) {
                element.addClass('animated fadeInRightBig');
                element.removeClass('ain');
            },
            offset: '550'
        });
    });
    $('.btn1').each(function () {
        var element = $(this);
        new Waypoint({
            element: element[0],
            handler: function () {
                element.addClass('fadeInLeftBig');
                element.removeClass('ain');
            }, offset: '680'
        });
    });
    $('.btn2').each(function () {
        var element = $(this);
        new Waypoint({
            element: element[0],
            handler: function () {
                element.addClass('animated zoomIn');
                element.removeClass('ain');
            }, offset: '300'
        });
    });
});



$(document).ready(function () {
    let cards = $('.cards');
    let stackArea = $('.stack-area');

    function rotateCards() {
        let angle = 0;
        let index = 0;
        cards.each(function () {
            $(this).css('transform', `rotate(${angle}deg)`);
            angle -= 10;
        });
        cards.each(function (i) {
            if ($(this).hasClass('away')) {
                $(this).css('transform', 'translateY(-120vh) rotate(-48deg)');
            } else {
                $(this).css('z-index', cards.length - index);
                index += 1;
            }
        });
    }

    $(window).on('scroll', function () {
        let distance = $(window).height() / 2;
        let topVal = stackArea[0].getBoundingClientRect().top;
        let index = -1 * (topVal / distance + 1);
        index = Math.floor(index);
        cards.each(function (i) {
            console.warn("i : "+i)
            console.warn("index : "+i)
            if (i <= index) {
                $(this).addClass('away');
            } else {
                $(this).removeClass('away');
            }
        });
        rotateCards();
    });
});


// var card = cards.length;
// console.log(card);
// let angle = 0;
// let index = 0;
// function rotateCards() {
//     for (let i = 0; i < cards.length; i++) {
//         if (cards[i].classList.contains("away")) {
//             cards[i].style.transform = `translateY(-120vh) rotate(-48deg)`
//         }
//         else {
//             cards[i].style.zIndex = cards.length - index;
//             index += 1;
//         }
//     }
// }

// let stackArea = document.querySelector('.stack-area');
// window.addEventListener("scroll", () => {
//     let distance = window.innerHeight / 2;
//     let topVal = stackArea.getBoundingClientRect().top;
//     let index = -1 * (topVal / distance + 1);
//     index = Math.floor(index);
//     for (let i = 0; i < cards.length; i++) {
//         if (i <= index) {
//             cards[i].classList.add("away");
//         }
//         else {
//             cards[i].classList.remove("away");
//         }
//     }
//     rotateCards();
// })
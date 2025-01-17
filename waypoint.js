
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
            offset: '850'
        });
    });
    $('.t2').each(function () {
        var element = $(this);
        new Waypoint({
            element: element[0],
            handler: function (direction) {
                element.addClass('animated bounceInRight');
                element.removeClass('ain');
            },
            offset: '850'
        });
    });
    $('.btn1').each(function () {
        var element = $(this);
        new Waypoint({
            element: element[0],
            handler: function () {
                element.addClass('fadeInLeftBig');
                element.removeClass('ain');
            }, offset: '850'
        });
    });
});
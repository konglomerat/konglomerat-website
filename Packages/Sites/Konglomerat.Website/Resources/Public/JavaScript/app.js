$(document).ready(function(){
    $('body').on('click touchstart', '.main-menu-toggle',function () {
        $('body').toggleClass('application--main-menu-is-open');
    });

    $('body').on('click touchstart', '.main-menu-close',function () {
        $('body').removeClass('application--main-menu-is-open');
    });

    $('body').on('click touchstart', '.main-menu__backdrop', function () {
        $('body').removeClass('application--main-menu-is-open');
    });

    // in the following we ensure that the menu can be closed when clicking outside the menu
    // TODO: use reusable functions for showing and closing the menu
    $('body').on('click touchstart', '.main-menu .section', function () {
        $('body').removeClass('application--main-menu-is-open');
    });
    $('body').on('click touchstart', '.main-menu .section .growing-comb__content', function (event) {
        event.stopPropagation();
    });

    $('.full-calendar').each(function() {
        const calendarId = $(this).data('calendar-id');
        const apiKey = $(this).data('api-key');
        let header = {
            left: 'title',
            center: '',
            right: 'month,listWeek today prev,next'
        };

        let defaultView = 'month';

        if($(window).width() < 800){
            header = null;
            defaultView = 'listWeek';
        }

        $(this).fullCalendar({
            googleCalendarApiKey: apiKey,
            events: {
                googleCalendarId: calendarId
            },
            defaultView: defaultView,
            header: header,
            firstDay: 1
        });
    })
});
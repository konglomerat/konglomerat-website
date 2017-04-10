$(document).ready(function(){
    $('.main-menu-toggle').on('mousedown touchstart', function () {
        $('body').toggleClass('application--main-menu-is-open');
    });

    $('.main-menu-close').on('mousedown touchstart', function () {
        $('body').removeClass('application--main-menu-is-open');
    });

    $('.main-menu__backdrop').on('mousedown touchstart', function () {
        $('body').removeClass('application--main-menu-is-open');
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
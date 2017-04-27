$(document).ready(function(){
    $('body').on('click', '.main-menu-toggle',function () {
        $('body').toggleClass('application--main-menu-is-open');
    });

    $('body').on('click', '.main-menu__backdrop', function () {
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
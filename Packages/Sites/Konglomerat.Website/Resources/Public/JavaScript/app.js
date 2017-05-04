const colorScheme = [
    '#ea3c00',
    '#007dea',
    '#ea7c00',
    '#7200ea',
    '#ea00c0',
    '#ead900',
    '#00eab4',
    '#3bea00',
    '#eaaa00',
    '#ea001c',
    '#c9ea00',
    '#0009ea'
];

// needed to correctly init java script in the backend
if (typeof document.addEventListener === 'function') {
    document.addEventListener('Neos.PageLoaded', function(event) {
        initCalendar();
    }, false);
}

$(document).ready(function(){
    $('body').on('click', '.main-menu-toggle',function () {
        $('body').toggleClass('application--main-menu-is-open');
    });

    $('body').on('click', '.main-menu__backdrop', function () {
        $('body').removeClass('application--main-menu-is-open');
    });

    initCalendar();
});

const initCalendar = function(){
    $('.full-calendar').each(function() {
        const apiKey = $(this).data('api-key');
        const calendarIdsArray = $(this).data('calendar-id').split(',');

        let eventSources = [];

        for (let i = 0; i < calendarIdsArray.length; i++) {
            eventSources.push({
                googleCalendarId: calendarIdsArray[i],
                color: colorScheme[i]
            });
        }

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
            eventSources: eventSources,
            defaultView: defaultView,
            header: header,
            firstDay: 1
        });
    })
};
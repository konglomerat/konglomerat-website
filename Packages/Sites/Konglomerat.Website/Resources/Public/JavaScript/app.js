const colorScheme = [
    '#ab0f5c',
    '#0047ff',
    '#45ad91',
    '#f5ad00'
];

// needed to correctly init java script in the backend
if (typeof document.addEventListener === 'function') {
    document.addEventListener('Neos.PageLoaded', function(event) {
        initCalendar();
        fitVideos();
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
    fitVideos();
});

const fitVideos = function(){
    $('.neos-nodetypes-html').fitVids();
};

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
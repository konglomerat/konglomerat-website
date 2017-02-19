$(document).ready(function(){
    updateCombCollectionHeight();

    $('.main-menu-toggle').click(function () {
        $('body').toggleClass('application--main-menu-is-open');
    });

    $('.main-menu-close').click(function () {
        $('body').removeClass('application--main-menu-is-open');
    });

    $('.main-menu__backdrop').click(function () {
        $('body').removeClass('application--main-menu-is-open');
    });

});

$(window).resize(function(){
    updateCombCollectionHeight();
});

function updateCombCollectionHeight() {
    $('.comb-collection').each(function(i, collection) {
        var combs = $(collection).children('.comb');
        var collectionOffset = $(collection).offset().top;

        var combMaxOffset = 0;

        for(var comb of combs) {
            var currentOffset = $(comb).offset().top + $(comb).find('svg').height();

            if(currentOffset > combMaxOffset){
                combMaxOffset = currentOffset;
            }
        }

        $(collection).height(combMaxOffset - collectionOffset);
    });
}

if (typeof document.addEventListener === 'function') {
    document.addEventListener('Neos.PageLoaded', function(event) {
        updateCombCollectionHeight();
    }, false);
}
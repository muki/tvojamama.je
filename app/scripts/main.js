function setUpSocial() {

    $('.fb').on('click', function() {
        var url = 'https://www.facebook.com/dialog/share?app_id=809056859203594&display=popup&href=' + encodeURIComponent(document.location.href) + '&redirect_uri=' + encodeURIComponent(document.location.href) + '&ref=responsive';
        window.open(url, '_blank');
        return false;
    });

    $('.tw').on('click', function() {
        var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title + ' ' + document.location.href);
        window.open(url, '_blank');
        return false;
    });

    $('.email').on('click', function() {
        var url = 'mailto:?subject=.&body=' + document.location.href;
        window.open(url, '_blank');
        return false;
    });

}


function getJoke(jokes) {
    return jokes[Math.floor(Math.random()*jokes.length)];
}

function makeJoke(jokes) {
    $('.thejoke h1').text(getJoke(jokes));
}

function renderHCF() {
    $('.header, .footer').height($(window).height() * 0.1);
    $('.content').height($(window).height() * 0.8);
}

$(document).ready(function() {

    setUpSocial();

    makeJoke(jokes);

    $('.refresh').on('click', function() {
        makeJoke(jokes);
    });
});

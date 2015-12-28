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

    makeJoke(jokes);

    $('.refresh').on('click', function() {
        makeJoke(jokes);
    });
});

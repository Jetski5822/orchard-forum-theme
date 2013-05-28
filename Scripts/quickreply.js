$(document).ready(function () {
    $("a.create").on('click', function (event) {

        $("#quick-reply").slideDown('slow', function () {
            $('article.thread').addClass('quick-reply-open');
        });

        event.preventDefault();
        return false;
    });

    $("#quick-reply .primaryAction").on('click', function (event) {
        $("#quick-reply").slideUp('slow', function () {
            $('article.thread').removeClass('quick-reply-open');
        });
        
        event.preventDefault();
        return false;
    });

    $("#quick-reply .close").on('click', function (event) {
        $("#quick-reply").slideUp('slow', function () {
            $('article.thread').removeClass('quick-reply-open');
        });
        
        event.preventDefault();
        return false;
    });
});
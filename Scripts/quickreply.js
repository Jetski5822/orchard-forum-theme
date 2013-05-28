$(document).ready(function () {
    $("a.create").on('click', function (event) {

        $("#quick-reply").slideDown('slow', function () {
            $('#layout-wrapper').addClass('quick-reply-open');
        });

        event.preventDefault();
        return false;
    });

    $("#quick-reply .primaryAction").on('click', function () {
        $("#quick-reply").slideUp('slow', function () {
            $('#layout-wrapper').removeClass('quick-reply-open');
        });
    });

    $("#quick-reply .close").on('click', function (event) {
        $("#quick-reply").slideUp('slow', function () {
            $('#layout-wrapper').removeClass('quick-reply-open');
        });
        
        event.preventDefault();
        return false;
    });
});
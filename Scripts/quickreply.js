$(document).ready(function () {
    $('#content').on('click', "a.create", function (event) {

        $("#quick-reply").slideDown('slow', function () {
            $('#layout-wrapper').addClass('quick-reply-open');
            
            $("#quick-reply .inner-quick-reply").toggleClass("invisible");
        });

        event.preventDefault();
        return false;
    });

    //$("#quick-reply .primaryAction").on('click', function () {
    //    $("#quick-reply").slideUp('slow', function () {
    //        $('#layout-wrapper').removeClass('quick-reply-open');
    //    });
    //});

    $("#quick-reply .close").on('click', function (event) {
        $("#quick-reply .inner-quick-reply").toggleClass("invisible");
        
        $("#quick-reply").slideUp('slow', function () {
            $('#layout-wrapper').removeClass('quick-reply-open');
        });
        
        event.preventDefault();
        return false;
    });
});
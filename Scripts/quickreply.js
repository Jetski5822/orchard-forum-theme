$(document).ready(function () {
    $("#quick-reply .close").on('click', function (event) {
        $("#quick-reply .inner-quick-reply").toggleClass("invisible");
        
        $("#quick-reply").slideUp('slow', function () {
            $('#layout-wrapper').removeClass('quick-reply-open');
        });
        
        event.preventDefault();
        return false;
    });
});
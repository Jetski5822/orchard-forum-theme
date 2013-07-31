$(document).ready(function () {
    $("#quick-reply .cancel").on('click', function (event) {
        $("#quick-reply").addClass('closed');
        $("#quick-reply").removeClass('open');
        
        event.preventDefault();
        return false;
    });
});
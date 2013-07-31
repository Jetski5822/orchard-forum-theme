$(document).ready(function () {
    $('.nyroModal').nyroModal();

    /*.loginlink*/

    $(document).on('click', ".account-information .primaryAction", function (event) {
        event.preventDefault();
        
        var $form = $(this).parents("form:first"),
            urlAction = $form.attr('action'),
            content = $form.serialize(),
            area = $(this).parents(".account-information");

        $.post(urlAction, content)
            .done(function (html) {
                var defaultloginform = $(html.trim()).find('.account-information');

                if (defaultloginform.find('.validation-summary-errors').length > 0) {
                    area.html(defaultloginform.html());

                    $.nmTop().resize(true);
                    $('.nyroModal').nyroModal();
                } else {
                    window.location = window.location.pathname;
                }
            })
            .fail(function (error) { alert("error"); });

        return false;
    });
});
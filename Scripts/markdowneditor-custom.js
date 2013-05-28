$(document).ready(function () {
    $("a.preview-toggle").on('click', function (e) {
        var self = $(this);
        var parent = self.parent();
        var input = parent.find('.wmd-input');
        var isFull = input.hasClass('wmd-input-full');

        parent.find(".wmd-preview-box").toggleClass("wmd-preview-box-hidden").promise().done(function() {
            input.toggleClass("wmd-input-full");

            if (isFull) {
                self.text("« Hide Preview");
            } else {
                self.text("Show Preview »");
            }
        });
        
        e.preventDefault();
        return false;
    });
});
$(document).ready(function () {
    var threadCreate = $("#thread-create #wmd-input-PostPart-0");

    if (threadCreate.length > 0) {
        var converter = Markdown.getSanitizingConverter();

        var idPostfix = threadCreate.attr('id').substr('wmd-input'.length);

        var editor = new Markdown.Editor(converter, idPostfix, {
            handler: function() { window.open("http://daringfireball.net/projects/markdown/syntax"); }
        });

        editor.run();
    }
    
    $('#content').on('click', 'a.preview-toggle', function (e) {
        var self = $(this);
        var parent = self.parent();
        var input = parent.find('.wmd-input');
        var isFull = input.closest(".wmd-box").hasClass('wmd-hide-preview');

        input.closest(".wmd-box").toggleClass("wmd-hide-preview");
        input.css("width", "");

        if (isFull) {
            self.text("« Hide Preview");
        } else {
            self.text("Show Preview »");
        }
        
        e.preventDefault();
        return false;
    });
});
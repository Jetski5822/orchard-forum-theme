$(document).ready(function () {
    var threadCreate = $("#thread-create #wmd-input-PostPart-0");

    if (threadCreate.length > 0) {
        var idPostfix = threadCreate.attr('id').substr('wmd-input'.length);

        var editor = Orchard.Markdown.createEditor(idPostfix);

        editor.run();
    }
    
    $('#content').on('click', 'a.toggle-preview', function (e) {
        var self = $(this);
        var parent = self.parent();
        
        if (parent.hasClass('hide-preview')) {
            self.text("« Hide Preview");
        } else {
            self.text("Show Preview »");
        }
        
        parent.toggleClass("hide-preview");
        
        e.preventDefault();
        return false;
    });
});
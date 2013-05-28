(function ($, window, inlineedit, markdown) {
    "use strict";

    var $inlineedit = $(inlineedit);

    $inlineedit.bind(inlineedit.events.retrieveContent, function (event, scope, shapeEditor) {
        console.debug('Processing Content: TinyMce Editor');

        console.debug('Processed Content: TinyMce Editor');
    });

    $inlineedit.bind(inlineedit.events.editorPrepared, function (event, shape, shapeEditor) {
        console.debug('Finalizing Editor');
        var marker = '<!-- markdown -->';
        var converter = markdown.getSanitizingConverter();

        var innerEditorShape = $(shapeEditor).closest('.shape');
        var editors = innerEditorShape.find('.wmd-input');

        editors.each(function () {

            var idPostfix = $(this).attr('id').substr('wmd-input'.length);

            var innerEditor = new markdown.Editor(converter, idPostfix, {
                handler: function () { window.open("http://daringfireball.net/projects/markdown/syntax"); }
            });
            
            innerEditor.run();
        });

        $(innerEditorShape).on('click', "a.preview-toggle", function (e) {
            var self = $(this);
            var parent = self.parent();
            var input = parent.find('.wmd-input');
            var isFull = input.hasClass('wmd-input-full');
            
            parent.find(".wmd-preview-box").toggleClass("wmd-preview-box-hidden").promise().done(function () {
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
        
        /* Foo */

        console.debug('Finalized Editor');
    });

    $inlineedit.bind(inlineedit.events.notifyEditorChanged, function () {
        var converter = markdown.getSanitizingConverter();
        
        var innerEditor = new markdown.Editor(converter);
        console.log(innerEditor);
        innerEditor.run();
    });

    var editor = {
        
    };

    if (!window.orchard) {
        window.orchard = {};
    }

    if (!window.orchard.inlineedit) {
        window.orchard.inlineedit = {};
    }

    if (!window.orchard.inlineedit) {
        window.orchard.inlineedit.ui = {};
    }

    window.orchard.inlineedit.defaulteditor = editor;
})(jQuery, window, window.orchard.inlineedit.ui, window.Markdown);
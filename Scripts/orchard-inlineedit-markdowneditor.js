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

        var editors = $(shapeEditor).closest('.shape').find('.wmd-input');

        editors.each(function () {

            console.debug('Foo Bar');

            var idPostfix = $(this).attr('id').substr('wmd-input'.length);

            var innerEditor = new markdown.Editor(converter, idPostfix, {
                handler: function () { window.open("http://daringfireball.net/projects/markdown/syntax"); }
            });
            
            innerEditor.run();
        });
        
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
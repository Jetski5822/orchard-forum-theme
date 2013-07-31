(function ($, window, inlineedit) {
    "use strict";

    var $inlineedit = $(inlineedit);

    var markdownEditor = undefined;
    
    $inlineedit.bind(inlineedit.events.retrieveContent, function (event, scope, shapeEditor) {
        console.log('Processing Content: TinyMce Editor');

        console.log('Processed Content: TinyMce Editor');
    });

    $inlineedit.bind(inlineedit.events.editorPrepared, function (event, shape, shapeEditor) {
        console.log('Finalizing Editor');
        var marker = '<!-- markdown -->';
        

        var innerEditorShape = $(shapeEditor).closest('.shape');
        //var shapeId = innerEditorShape.data('shape-id');
        var input = innerEditorShape.find('.wmd-input');

        var idPostfix = $(input).attr('id').substr('wmd-input'.length);
        
        markdownEditor = Orchard.Markdown.createEditor(idPostfix);

        refreshPreview(input);

        console.log('Finalized Editor');
    });

    $inlineedit.bind(inlineedit.events.notifyEditorChanged, function () {
        refreshPreview(null);
    });

    function refreshPreview(input) {
        if (markdownEditor.refreshPreview == undefined) {
            markdownEditor.run();

            $(input).closest(".wmd-box").TextAreaResizer(null, {
                useParentWidth: true,
                resizeWrapper: true,
            });
        } else {
            markdownEditor.refreshPreview();
        }
    }

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
})(jQuery, window, window.orchard.inlineedit.ui);
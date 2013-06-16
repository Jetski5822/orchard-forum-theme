(function ($, window, inlineedit, markdown) {
    "use strict";

    var $inlineedit = $(inlineedit);

    var converter = markdown.getSanitizingConverter();
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
        
        markdownEditor = new markdown.Editor(converter, idPostfix, {
            handler: function () { window.open("http://daringfireball.net/projects/markdown/syntax"); }
        });
            
        markdownEditor.run();
        
        var resizableSelector = ".wmd-innerbox",
        resizeInnerElements = function (el, size) {
            if (size > 120) {
                el.height(size - 20);
            }
        };
        resizeInnerElements($(innerEditorShape).find(resizableSelector), 400);

        console.log('Finalized Editor');
    });

    $inlineedit.bind(inlineedit.events.notifyEditorChanged, function () {
        refreshPreview();
    });

    function refreshPreview() {
        if (markdownEditor.refreshPreview == undefined) {
            markdownEditor.run();

            var resizableSelector = ".wmd-innerbox",
                resizeInnerElements = function (el) {
                    el.height(195);
                };
            resizeInnerElements($(resizableSelector));
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
})(jQuery, window, window.orchard.inlineedit.ui, window.Markdown);
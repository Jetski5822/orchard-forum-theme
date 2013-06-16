(function ($, window, inlineedit, tinyMCE) {
    "use strict";

    var $inlineedit = $(inlineedit);

    $inlineedit.bind(inlineedit.events.retrieveContent, function (event, scope, shapeEditor) {
        console.log('Processing Content: TinyMce Editor');

        if (tinyMCE != undefined) {
            tinyMCE.triggerSave();
        }

        console.log('Processed Content: TinyMce Editor');
    });

    $inlineedit.bind(inlineedit.events.editorPrepared, function (event, shape, shapeEditor) {
        console.log('Finalizing Editor');
        
        // TODO: http://blog.mirthlab.com/2008/11/13/dynamically-adding-and-removing-tinymce-instances-to-a-page/

        tinyMCE.init({
            theme: "simple",
            mode: "specific_textareas",
            editor_selector: "tinymce",
            plugins: "fullscreen,autoresize,searchreplace,inlinepopups,imageeditor",
            theme_advanced_toolbar_align: "left",
            theme_advanced_buttons1: "search,replace,|,cut,copy,paste,|,undo,redo,|,link,unlink,charmap,emoticon,codeblock,|,bold,italic,|,numlist,bullist,formatselect,|,code,fullscreen,",
            convert_urls: false,
            valid_elements: "*[*]",
            // shouldn't be needed due to the valid_elements setting, but TinyMCE would strip script.src without it.
            extended_valid_elements: "script[type|defer|src|language]",
            theme_advanced_resizing: true,
            theme_advanced_resizing_use_cookie: false,
        });

        console.log('Finalized Editor');
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
})(jQuery, window, window.orchard.inlineedit.ui, window.tinyMCE);
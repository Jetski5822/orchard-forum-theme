$(document).ready(function () {
    var idPostfix = $("#quick-reply #wmd-input-PostPart-0").attr('id').substr('wmd-input'.length);

    var editor = Orchard.Markdown.createEditor(idPostfix);
    
    $(document).on('click', "a.create", function (event) {
        if ($(this).is(".quote")) {
            createWithQuote($(this));
        } else {
            createEmpty();
        }

        refreshPreview();

        var quickReply = $("#quick-reply");
        
        quickReply.find("#contentid").val($(this).closest(".content-item").data("contentitem-id"));

        quickReply.addClass('open');
        quickReply.removeClass('closed');
        
        event.preventDefault();
        return false;
    });

    function createEmpty() {
        $("#quick-reply .wmd-input").focus().val('');
    }

    function createWithQuote(element) {
        var content = '';

        if ($(element).closest("article.content-item").has(".editable-content").length == true) {
            // This deals with inline editing.
            content = $(element).closest("article.content-item").find(".editable-content").children().not('header,footer').clone();
        } else {
            content = $(element).closest("article.content-item").find(".post-content").children().not('header,footer').clone();
        }

        content = $('<div></div>').append(content);
        content = '<blockquote>' + content.html().toString() + '</blockquote>';
        var markdown = toMarkdown(content) + "\n\n";

        // append content and focus
        $("#wmd-input-PostPart-0").focus().val($("<div/>").html(markdown).text()); // -0 signifys its a quick reply.
    }

    function refreshPreview() {
        if (editor.refreshPreview == undefined) {
            editor.run();

            $("#quick-reply").TextAreaResizer(null, {
                useParentWidth: true,
                resizeWrapper: true,
                prepend: true
            });
        } else {
            editor.refreshPreview();
        }
    }
});
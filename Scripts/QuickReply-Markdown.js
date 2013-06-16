$(document).ready(function () {
    var converter = Markdown.getSanitizingConverter();

    var idPostfix = $("#quick-reply #wmd-input-PostPart-0").attr('id').substr('wmd-input'.length);

    var editor = new Markdown.Editor(converter, idPostfix, {
        handler: function () { window.open("http://daringfireball.net/projects/markdown/syntax"); }
    });

    $(document).on('click', "a.create", function (event) {
        if ($(this).is(".quote")) {
            createWithQuote($(this));
        } else {
            createEmpty();
        }

        refreshPreview();

        var quickReply = $("#quick-reply");
        
        quickReply.find("#contentid").val($(this).closest(".content-item").data("contentitem-id"));

        if (!$('#layout-wrapper').hasClass('quick-reply-open')) {

            quickReply.slideDown('slow', function () {

                $('#layout-wrapper').addClass('quick-reply-open');
                quickReply.find(".wmd-input").css("width", "");
                quickReply.find(".inner-quick-reply").toggleClass("invisible");
            });
        }

        event.preventDefault();
        return false;
    });

    function createEmpty() {
        $("#quick-reply .wmd-input").focus().val('');
    }

    function createWithQuote(element) {
        var content = '';

        if ($(element).closest("article.post").has(".editable-content").length == true) {
            content = $(element).closest("article.post").find(".editable-content").children().not('header,footer').clone();
        } else {
            content = $(element).closest("article.post").find(".post-content").children().not('header,footer').clone();
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

            var resizableSelector = ".wmd-innerbox",
                resizeInnerElements = function (el) {
                    el.height(195);
                };
            resizeInnerElements($(resizableSelector));
        } else {
            editor.refreshPreview();
        }
    }
});
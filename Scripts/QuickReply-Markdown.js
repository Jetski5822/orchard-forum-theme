$(document).ready(function () {
    $('#content').on('click', "a.create.quote", function (event) {
        window.location.hash = "#quick-reply";

        var content = '';

        if (window.orchard.inlineedit != undefined) {
            // get content
            content = $(this).closest("article.post").find(".editable-content").children().clone();
        } else {
            // get content
            content = $(this).closest("article.post").children().not('header,footer').clone();
        }

        content = $('<div></div>').append(content);
        content = '<blockquote>' + content.html().toString() + '</blockquote>';
        var markdown = toMarkdown(content) + "\n\n";

        // append content and focus
        $("#wmd-input-PostPart").focus().val(markdown);
        
        // Attempting to refesh preview. Not working.
        //$("#wmd-input-PostPart").trigger({ type: 'keypress', which: '13' });
        
        event.preventDefault();
        return false;
    });
    
    $("a.create").not("a.create.quote").on('click', function (event) {
        // clear the quick reply box
        window.location.hash = "#quick-reply";

        // append content and focus
        $("#wmd-input-PostPart").focus().val('');
        
        event.preventDefault();
        return false;
    });
});
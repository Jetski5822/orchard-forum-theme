$(document).ready(function () {
    $("a.create.quote").on('click', function (event) {
        window.location.hash = "#quick-reply";

        // get content
        var content = $(this).closest("article.post").children().not('header,footer').clone();

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
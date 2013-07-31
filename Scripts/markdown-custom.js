var Orchard = {};

Orchard.Markdown = {

    /**
      Creates a new pagedown markdown editor, supplying i18n translations.
  
      @method createEditor
      @param {Object} converterOptions custom options for our markdown converter
      @return {Markdown.Editor} the editor instance
    **/
    createEditor: function (idPostfix, converterOptions) {

        if (!converterOptions) converterOptions = {};

        // By default we always sanitize content in the editor
        converterOptions.sanitize = true;

        var markdownConverter = Orchard.Markdown.markdownConverter(converterOptions);

        return new Markdown.Editor(markdownConverter, idPostfix, {
            handler: function () { window.open("http://daringfireball.net/projects/markdown/syntax"); },
            strings: Markdown.Editor.defaultsStrings
        });
    },

    /**
      Creates a Markdown.Converter that we we can use for formatting
  
      @method markdownConverter
      @param {Object} opts the converting options
    **/
    markdownConverter: function (opts) {
        if (!opts) opts = {};

        var converter = new Markdown.Converter();

        // Support autolinking of www.something.com
        converter.hooks.chain("preConversion", function (text) {
            return text.replace(/(^|[\s\n])(www\.[a-z\.\-\_\(\)\/\?\=\%0-9]+)/gim, function (full, _, rest) {
                return " <a href=\"http://" + rest + "\">" + rest + "</a>";
            });
        });

        converter.hooks.chain("postConversion", function (text) {
            if (!text) return "";

            // don't do @username mentions inside <pre> or <code> blocks
            text = text.replace(/<(pre|code)>([\s\S](?!<(pre|code)>))*?@([\s\S](?!<(pre|code)>))*?<\/(pre|code)>/gi, function (m) {
                return m.replace(/@/g, '&#64;');
            });


            return (text);
        });

        //if (opts.sanitize) {
        //    converter.hooks.chain("postConversion", function (text) {
        //        if (!window.sanitizeHtml) return "";
        //        return window.sanitizeHtml(text);
        //    });
        //}

        return converter;
    }

};
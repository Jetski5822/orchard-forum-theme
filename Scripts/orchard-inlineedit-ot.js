(function ($, window, inlineeditui, contentpad) {
    "use strict";

    var $inlineeditui = $(inlineeditui),
        $contentpad = $(contentpad);


    $contentpad.bind(contentpad.events.changeAcknowledged, function (event, contentitemid) {
        console.log("updated");
    });

})(jQuery, window, window.orchard.inlineedit.ui, window.contentpad);
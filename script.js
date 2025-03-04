// script.js
$(document).ready(function() {
    const expandButton = $('.expand-button');
    const contentDivs = $('.content-div');

    expandButton.on('click', function(e) {
        e.preventDefault();

        const buttonId = $(this).attr('id');
        const targetContentId = `${buttonId}-content`;

        // Toggle the visibility of the corresponding content
        if ($(targetContentId).is(':visible')) {
            $(targetContentId).hide();
            $(this).text('+ Show more');
        } else {
            $(targetContentId).show();
            $(this).text('- Hide less');
        }
    });
});

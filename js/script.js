$(document).ready(function() {
    console.log("jQuery is loaded and document is ready.");

    $('.skill').click(function() {
        console.log("Skill clicked: ", this);

        const expandingSection = $(this).find('.expanding-section');
        console.log("Expanding section found: ", expandingSection.length > 0);

        if (expandingSection.length === 0) {
            console.error("Expanding section not found!");
            return;
        }

        // Close other sections
        $('.expanding-section').not(expandingSection).css({
            'max-height': '0',
            'transition': 'max-height 0.3s ease-out'
        });

        // Toggle current section
        if (expandingSection.css('max-height') === '0px') {
            expandingSection.css('max-height', '300px');
        } else {
            expandingSection.css('max-height', '0');
        }

        // Log current styles for debugging
        console.log("Current max-height after toggle: ", expandingSection.css('max-height'));
        console.log("Current computed style: ", window.getComputedStyle(expandingSection[0]).maxHeight);
    });
});
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
        $('.expanding-section').not(expandingSection).slideUp(300).removeClass('active');

        // Toggle current section with slide effect
        if (expandingSection.hasClass('active')) {
            expandingSection.slideUp(300).removeClass('active');
        } else {
            expandingSection.slideDown(300).addClass('active');
        }

        // Log current styles for debugging
        console.log("Current max-height after toggle: ", expandingSection.css('max-height'));
        console.log("Current computed style: ", window.getComputedStyle(expandingSection[0]).maxHeight);
    });

    // Carousel controls
    $('.carousel-controls .prev').click(function(event) {
        event.stopPropagation(); // Prevent closing the expanding section
        const carousel = $(this).closest('.expanding-section').find('.carousel');
        const currentMargin = parseInt(carousel.css('margin-left')) || 0;
        const itemWidth = carousel.find('.carousel-item').outerWidth();

        if (currentMargin < 0) { // Prevent going beyond the first item
            carousel.animate({
                'margin-left': currentMargin + itemWidth + 'px'
            }, 300);
        }
    });

    $('.carousel-controls .next').click(function(event) {
        event.stopPropagation(); // Prevent closing the expanding section
        const carousel = $(this).closest('.expanding-section').find('.carousel');
        const currentMargin = parseInt(carousel.css('margin-left')) || 0;
        const itemWidth = carousel.find('.carousel-item').outerWidth();
        const totalWidth = carousel.find('.carousel-item').length * itemWidth;

        if (Math.abs(currentMargin) < totalWidth - itemWidth) { // Prevent going beyond the last item
            carousel.animate({
                'margin-left': currentMargin - itemWidth + 'px'
            }, 300);
        }
    });

    // Profile pic flip functionality
    $('.flip-container').click(function() {
        const flipper = $(this).find('.flipper');
        flipper.toggleClass('hover');

        if (flipper.hasClass('hover')) {
            $(this).find('.front').css('display', 'none');
            $(this).find('.back').css('display', 'block');
        } else {
            $(this).find('.front').css('display', 'block');
            $(this).find('.back').css('display', 'none');
        }
    });
});
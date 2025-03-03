// Create the section element
const section = document.createElement('section');

// Create the unordered list (ul) element
const ul = document.createElement('ul');
ul.id = 'partners';
ul.classList.add('row'); // Use Bootstrap's grid system for responsive layout

// Create the list items (li) and image elements
const partners = [
{ src: 'Images/partner-bustour.png', alt: 'Partner Bus Tour' },
{ src: 'Images/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
{ src: 'Images/partner-campingadv.png', alt: 'Partner Camping Adventure' },
{ src: 'Images/partner-collegetours.png', alt: 'Partner College Tours' },
{ src: 'Images/partner-rentalbike.png', alt: 'Partner Bike Rental' },
{ src: 'Images/partner-tourgroup.png', alt: 'Partner Tour Group' }
];

// Loop through the partners array to create each list item with an image
partners.forEach(partner => {
const li = document.createElement('li');
li.classList.add('partner');

const img = document.createElement('img');
img.src = partner.src;
img.alt = partner.alt;

li.appendChild(img);
ul.appendChild(li);
});

// Append the unordered list to the section
section.appendChild(ul);

// Finally, append the section to the body (or wherever you'd like it to go in your document)
document.body.appendChild(section);

$(document).ready(function() {
    /* Open lightbox on image click */
    $('.lightbox-toggle img').click(function() {
        // Fade in the backdrop with opacity and display it
        $('.backdrop').animate({'opacity': '.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Clear any previous image inside the box (if any)
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); // Clear the image if already exists
        }

        // Get the alt attribute of the clicked image
        var $altvalue = $(this).attr('alt');

        // Create and clone the image to be shown in the lightbox
        var img = $(this).clone();
        $('.box').append(img);
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function() {
        // Fade out the backdrop and hide it
        $('.backdrop').animate({'opacity': '0'}, 300, 'linear', function() {
            $('.backdrop').css('display', 'none');
        });
        // Fade out the box
        $('.box').fadeOut();
    });
});
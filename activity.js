$(document).ready(function () {
    let selectedActivities = [];
    $("td").click(function () {
        var content = $(this).text(); // Get content of the clicked cell

        // Check if the content is not "Not Available"
        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight"); // Add/remove highlight on cell

            if ($(this).hasClass("tdhighlight")) { // If the cell is selected
                // Make the display box visible
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em"); // Add space above the display box
                $('#result').append("<p>" + content + "</p>"); // Add selected activity to the result box
            } else { // If the cell is deselected
                // Remove the selected activity from the result box
                $('#result p:contains("' + content + '")').remove();
                
                // If no activities are selected, hide the display box
                if ($('#result').children('p').length === 0) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
            if (selectedActivities.length > 0) {
                $("#selectedActivities").html(selectedActivities.map(item => `<li>${item}</li>`).join(""));
                $("#activityModal").modal("show");
            }
        }
    });


    // Optional: Hover effect for better UX
    $("td").hover(function () {
        if ($(this).text() !== "Not Available" && !$(this).hasClass("tdhighlight")) {
            $(this).css('background-color', '#f2f2f2');
        }
    }, function () {
        if (!$(this).hasClass("tdhighlight")) {
            $(this).css('background-color', ''); // Reset background
        }
    });
});

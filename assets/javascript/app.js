$(document).ready(function () {
    // Topics Array
    var topics = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'neptune', 'uranus', 'pluto', 'nasa', 'spacex'];

    origButtons();

    // Topic Buttons
    function origButtons() {
        for (var i = 0; i < topics.length; i++) {
            var topicDiv = $('<div>');
            var topicButtons = $("<button>");
            topicButtons.addClass('topicButtons');
            topicButtons.attr('data-name', topics[i]);
            topicButtons.text(topics[i]);

            topicDiv.append(topicButtons);
            $("#buttons-div").append(topicButtons);
        }
    }
    // Event Listener for all Buttons
    $('.topicButtons').click(function () {
        var thisTopic = $(this).attr('data-name');
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
            thisTopic + "&api_key=LXwFIEjBvFNKbrVWpPlCpIIj6rIB1A7A&limit=10&offset=0&rating=G&lang=en";
    // AJAX GET Method
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        // Once Data is returned
        .then(function(response) {
            console.log(response)
            console.log(this)
        })
    });
    // Add to Gif Div

    // Toggle Pause on Gifs

});
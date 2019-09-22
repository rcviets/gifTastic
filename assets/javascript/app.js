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
        $('#gifs-div').empty();
        var thisTopic = $(this).attr('data-name');
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=LXwFIEjBvFNKbrVWpPlCpIIj6rIB1A7A&q=" + 
        thisTopic + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryUrl,
            method: "GET"
        })
            // Once Data is returned
            .then(function (response) {
                console.log(response)
                console.log(this)

                var results = response.data;

                // Add to Gif Div
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div>')
                    var p = $('<p>').text("Rating: " + results[i].rating);
                    var gifImage = $('<img>');
                    gifImage.attr('src', results[i].images.fixed_height.url);
                    
                    gifDiv.append(gifImage);
                    gifDiv.append(p);
                    $('#gifs-div').prepend(gifDiv);
                }
            })
    });

    // Toggle Pause on Gifs

});
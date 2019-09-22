$(document).ready(function(){
// Topics Array
var topics = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'neptune', 'uranus', 'pluto', 'nasa', 'spacex'];

origButtons();

// Topic Buttons
function origButtons() {
    for(var i = 0; i < topics.length; i++) {
        var origDiv = $('<div>');
        var origButtons = $("<button>");
        origButtons.addClass('origButtons');
        origButtons.attr('data-name', topics[i]);
        origButtons.text(topics[i]);
        
        origDiv.append(origButtons);
        $("#buttons-div").append(origButtons);
    }
}

// Event Listener for all Buttons

// AJAX GET Method

// Filter by Rating

// Add to Gif Div

// Toggle Pause on Gifs

});
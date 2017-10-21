
$(document).ready(function(){

    // the width and height of the column
    var width = 16;
    var height = 16;

    // method to populate the grid with 16 x 16 grid of square divs
    function populateGrid(){

        // total number of boxes to be added to the grid
        var boxNo = width * height

        // add all of the boxes to the grid
        for (var i = 0; i < boxNo; i++){
            $('#grid').append('<div class="grid-box"></div>');
        }

        // change the css styling for the width and height of the boxes based on the total number
        // '-2' because there are 2px of border
        var boxWidth = (600 / width) - 2;
        var boxHeight = (600 / height) - 2;
        $('.grid-box').width(boxWidth);
        $('.grid-box').height(boxHeight);

        // when the cursor hovers over a box, it should change to a random color
        $('.grid-box').hover(function(){
            $(this).css('background-color', randomColour());
        });
    }

    populateGrid();


    // returns a random hex colour code
    function randomColour(){

        var code = '#';
        var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

        // gen random hex code
        for (var i = 0; i < 6; i++){
        	var rand = Math.floor(Math.random() * characters.length);
        	code += characters[rand];
        }

        return code;
    }


});

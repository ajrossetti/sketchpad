
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


    // initially populate the grid at 16x16
    populateGrid();


    // when the clear button is clicked, all the boxes are set to white
    $('#clearGrid').on('click', function(){
        $('.grid-box').css('background-color', '#ffffff');
    });


    // when the change size button is clicked, get a new width and height from
    // the user, and change the dimensions of the grid
    $('#changeSize').on('click', function(){
        $('.grid-box').remove();
        var newHeight = prompt("Enter how many squares high you would like the grid");
        var newWidth = prompt("Enter how many squares wide you would like the grid");
        height = newHeight;
        width = newWidth;
        populateGrid();
    });

});

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').on('submit', function () {
    var table_height = $('#input_height').val();
    var table_width = $('#input_width').val();
    // alert('Form submitted!' + table_height + " " + table_width);
    makeGrid(table_height, table_width);
    return false;
});

function clearGrid(){

  $('#pixel_canvas').empty();

}

function makeGrid(height, width) {

  clearGrid();
  //create our rows (height)
  for(var i=0; i < height; i++){
    $('#pixel_canvas').append('<tr><</tr>');

  }
  //create our cells for each row (width)
  $('#pixel_canvas tr').each(function(){
    for(var j=0; j < width; j++){
        $(this).append('<td></td>');

    }

  });
}

$('#pixel_canvas').on('click','td',function() {
     var color = $('#colorPicker').val();
     $(this).css("background-color",selectedColor);
});

var selectedColor = '#3498db';

$(".colorPickSelector").colorPick({
  'initialColor': '#3498db',
  'allowRecent': true,
  'recentMax': 5,
  'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1", "#bdc3c7", "#95a5a6", "#7f8c8d"],
  'onColorSelected': function() {
    selectedColor = this.color;
    this.element.css({'backgroundColor': this.color, 'color': this.color});
  }
});

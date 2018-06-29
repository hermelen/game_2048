$(document).ready(function() {
  // keybord listener
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37: // left
        toLeft();
        add2ToBoard();
        break;

      case 38: // up
        toUp()
        add2ToBoard();
        break;

      case 39: // right
        toRight()
        add2ToBoard();
        break;

      case 40: // down
        toDown()
        add2ToBoard();
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  function toLeft() {
    for (var i = 0; i < 4; i++) {
      for (var k = 3; k > 0; k--) {
        for (var j = k; j < 4; j++) {
          if (board[i][j] != null) {
            while (board[i][j - 1] == null) {
              board[i][j - 1] = board[i][j];
              board[i][j] = null;
              $("#cell_" + i + "_" + (j - 1)).append($("#cell_" + i + "_" + j).html());
              $("#cell_" + i + "_" + j).empty();
            }
            if (board[i][j - 1] == board[i][j]) {
              board[i][j - 1] = board[i][j]*2;
              board[i][j] = null;
              $("#cell_" + i + "_" + (j - 1)).empty();
              $("#cell_" + i + "_" + (j - 1)).append($("#cell_" + i + "_" + j).html()*2);
              $("#cell_" + i + "_" + j).empty();
            }
          }
        }
      }
    }
    console.log(board);
  }

  function toUp() {
    for (var k = 3; k > 0; k--) {
      for (var i = k; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (board[i][j] != null) {
            while (board[i - 1][j] == null) {
              board[i - 1][j] = board[i][j];
              board[i][j] = null;
              $("#cell_" + (i - 1) + "_" + j).append($("#cell_" + i + "_" + j).html());
              $("#cell_" + i + "_" + j).empty();
            }
            if (board[i - 1][j] == board[i][j]) {
              board[i - 1][j] = board[i][j]*2;
              board[i][j] = null;
              $("#cell_" + (i - 1) + "_" + j).empty();
              $("#cell_" + (i - 1) + "_" + j).append($("#cell_" + i + "_" + j).html()*2);
              $("#cell_" + i + "_" + j).empty();
            }
          }
        }
      }
    }
  }

  function toRight() {
    var move = true;
    while (move) {
      move = false;
      for (var i = 0; i < 3; i++) {
        for (var j = 2; j >= 0; j--) {
          if (board[i][j] != null && board[i][j + 1] == null) {
            board[i][j + 1] = board[i][j];
            board[i][j] = null;
            $("#cell_" + i + "_" + (j + 1)).append($("#cell_" + i + "_" + j).html());
            $("#cell_" + i + "_" + j).empty();
            move = true;
          }
          if (board[i][j] != null && board[i][j] == board[i + 1][j]) {
            move = false;
            board[i][j + 1] = board[i][j]*2;
            board[i][j] = null;
            $("#cell_" + i + "_" + (j + 1)).empty();
            $("#cell_" + i + "_" + (j + 1)).append($("#cell_" + i + "_" + j).html()*2);
            $("#cell_" + i + "_" + j).empty();
          }
        }
      }
    }
  }

  function toDown() {
    var move = true;
    while (move) {
      move = false;
      for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
          if (board[i][j] != null && board[i + 1][j] == null) {
            board[i + 1][j] = board[i][j];
            board[i][j] = null;
            $("#cell_" + (i + 1) + "_" + j).append($("#cell_" + i + "_" + j).html());
            $("#cell_" + i + "_" + j).empty();
            move = true;
          }
          if (board[i][j] != null && board[i + 1][j] == board[i][j]) {
            move = false;
            board[i + 1][j] = board[i][j]*2;
            board[i][j] = null;
            $("#cell_" + (i + 1) + "_" + j).empty();
            $("#cell_" + (i + 1) + "_" + j).append($("#cell_" + i + "_" + j).html()*2);
            $("#cell_" + i + "_" + j).empty();
          }
        }
      }
    }
  }


  $('main').append('<table class="table table-dark" id="2048_table">');
  $('#2048_table').append('<tbody>');

  var board = [];
  var table = [];

  for (var i = 0; i < 4; i++) {
    $('tbody').append('<tr id="row_' + i + '">');
    table[i] = [];
    for (var j = 0; j < 4; j++) {
      table[i][j] = '<td id="cell_' + i + '_' + j + '">';
      $('#row_' + i).append(table[i][j]);
    }
  }

  for (var i = 0; i < 4; i++) {
    board[i] = [];
    for (var j = 0; j < 4; j++) {
      board[i][j] = null;
    }
  }

  // initialBoard() = false;
  //
  // while (initialBoard() == false) {
  add2ToBoard();
  add2ToBoard();
  // }
  // console.log(initialBoard());

  function add2ToBoard() {
    var rowIndex = Math.floor(Math.random() * 4);
    var colIndex = Math.floor(Math.random() * 4);

    while (board[rowIndex][colIndex] != null) {
      rowIndex = Math.floor(Math.random() * 4);
      colIndex = Math.floor(Math.random() * 4);
    }
    board[rowIndex][colIndex] = 2;
    $("#cell_" + rowIndex + "_" + colIndex).append(2);
  }
  // console.log(initialBoard());

  console.log(board);




})

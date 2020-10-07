window.onload = function () {
    var board = document.querySelectorAll("#board div");
    for (var i = 0; i < board.length; i++)
    {
        board[i].classList.add("square");
    }
};


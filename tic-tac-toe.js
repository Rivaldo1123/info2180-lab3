
    window.onload = function () {
        boardMaker();
        //To make layout and set it to be class square. Also Add X or O to a square when clicked while adding the correct class to each

        function boardMaker() {
            let board = document.querySelectorAll('#board div');
            for (let i = 0; i < board.length; i++) {
                board[i].classList.add("square");

                board[i].onmouseover = function () { board[i].classList.toggle("hover", true) }
                board[i].onmouseout = function () { board[i].classList.toggle("hover", false) }

                var current_player = "X"

                board[i].onclick = function () {
                    if (board[i].innerHTML === "" && current_player === "X") {
                        board[i].classList.toggle("O", false);
                        board[i].innerHTML = "X";
                        current_player = "O";
                        board[i].classList.toggle("X", true);
                        who_won(board);
                    }
                    else if (board[i].innerHTML === "" && current_player === "O") {
                        board[i].classList.toggle("X", false);
                        board[i].innerHTML = "O";
                        current_player = "X";
                        board[i].classList.toggle("O", true);
                        who_won(board);
                    }
                }
            }
        }
    }
    function who_won(board){

    };


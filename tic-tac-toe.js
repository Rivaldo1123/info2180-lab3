var game_active = true // Global
var count_clicks = 0

function main() {
    window.onload = function () {
        boardMaker();
        document.getElementsByClassName("btn")[0].onclick = function () {
            for (let i = 0; i < board.length; i++) {
                board[i].innerHTML = "";
            }
            boardMaker();

            // reset variables
            game_active = true
            count_clicks = 0
            document.getElementById("status").classList.remove("you-won")
            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
        }
        let board = document.getElementsByClassName("square");
    }

    //To make layout and set it to be class square. Also Add X or O to a square when clicked while adding the correct class to each

    function boardMaker() {
        let board = document.querySelectorAll('#board div');
        for (let i = 0; i < board.length; i++) {
            board[i].classList.add("square");

            board[i].onmouseover = function () { board[i].classList.toggle("hover", true) }
            board[i].onmouseout = function () { board[i].classList.toggle("hover", false) }

            var current_player = "X"

            board[i].onclick = function () {
                // count clicks so we can check if it ends, 9 clicks and the game end. after the 9th click check if the game drawed
                count_clicks = count_clicks + 1

                console.log(game_active)
                if (!game_active) {
                    return
                } // functions returns if game is not active to disallow clicking

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

                // If game is still active and total clicks reach 9 this means the game is a draw
                if (game_active && count_clicks == 9) {
                    alert(document.getElementById('status').innerHTML = "Game is a draw, Start New Game");
                    game_active = false
                }
            }
        }
    }
}

function who_won(board) {
    if (board[0].innerHTML !== "" && (board[0].innerHTML === board[1].innerHTML && (board[1].innerHTML === board[2].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[0].innerHTML + " is the Winner!";
        game_active = false

    }
    if (board[3].innerHTML !== "" && (board[3].innerHTML === board[4].innerHTML && (board[4].innerHTML === board[5].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[3].innerHTML + " is the Winner!";
        game_active = false

    }
    if (board[6].innerHTML !== "" && (board[6].innerHTML === board[7].innerHTML && (board[7].innerHTML === board[8].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[6].innerHTML + " is the Winner!";
        game_active = false

    }

    if (board[0].innerHTML !== "" && (board[0].innerHTML === board[3].innerHTML && (board[3].innerHTML === board[6].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[0].innerHTML + " is the Winner!";
        game_active = false

    }
    if (board[1].innerHTML !== "" && (board[1].innerHTML === board[4].innerHTML && (board[4].innerHTML === board[7].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[1].innerHTML + " is the Winner!";
        game_active = false

    }
    if (board[2].innerHTML !== "" && (board[2].innerHTML === board[5].innerHTML && (board[5].innerHTML === board[8].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[2].innerHTML + " is the Winner!";
        game_active = false

    }

    if (board[0].innerHTML !== "" && (board[0].innerHTML === board[4].innerHTML && (board[4].innerHTML === board[8].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[0].innerHTML + " is the Winner!";
        game_active = false

    }
    if (board[2].innerHTML !== "" && (board[2].innerHTML === board[4].innerHTML && (board[4].innerHTML === board[6].innerHTML))) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations! " + board[2].innerHTML + " is the Winner!";
        game_active = false
    }

}

main();
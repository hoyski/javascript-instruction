function board(boardWidth) {
    let board = "";

    for (let i = 0; i < boardWidth; i++) {
        for (let j = 0; j < boardWidth; j++) {
            board += (i % 2 == 0) ? (j % 2) == 0 ? "#" : "X" : (j % 2) == 0 ? "X" : "#";
        }
        board += "\n";
    }

    return board;
}

console.log(board(6));
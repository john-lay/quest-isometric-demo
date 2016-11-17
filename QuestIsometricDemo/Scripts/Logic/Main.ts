var map = [
    // row 1
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 2
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 3
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 4
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 5
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 6
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 7
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ],
    // row 8
    [
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false }
    ]
];

var currentPos = [4, 4];
var move = 3;

// write to DOM
function drawTable() {
    var table = '<table>';

    for (var y = 0; y < map.length; y++) {
        table += '<tr>';
        for (var x = 0; x < map[y].length; x++) {
            table += calcMove(x, y);
        }
        table += '</tr>';
    }

    table += '</table>';
    document.write(table);
}

function calcMove(x, y) {
    var movePoints = move + 1; // adjust for zeroth array offset
    var posX = currentPos[0];
    var posY = currentPos[1];
    
    // for columns before the current position subtract the column from the current position
    // for columns after the current position subtract the current position from the column
    // subtract the result of this calculation from the move points to calculate whether
    // the character can move to this position
    if (x <= posX) {
        movePoints -= (posX - x);
    } else if (x > posX) {
        movePoints -= (x - posX);
    }

    // as above for rows
    if (y <= posY) {
        movePoints -= (posY - y);
    } else if (y > posY) {
        movePoints -= (y - posY);
    }

    var canMove = movePoints > 0;

    // the current tile the player is on
    if (x === currentPos[0] && y === currentPos[1]) {
        return '<td style="background-color: yellow">' + x + ', ' + y + '</td>';
    }
    if (canMove) {
        return '<td style="background-color: green">' + x + ', ' + y + '</td>';
    } else {
        return '<td style="">' + x + ', ' + y + '</td>';
    }
}

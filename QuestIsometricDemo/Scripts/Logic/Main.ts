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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
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
        { height: 1, blocked: false, canMove: false },
    ],
];

// write to DOM
var table = '<table>';

for (var i = 0; i < map.length; i++) {
    table += '<tr>';
    for (var j = 0; j < map[i].length; j++) {
        table += '<td>' + i + ', ' + j + '</td>';
    }
    table += '</tr>';
}

table += '</table>';
document.write(table);

﻿var tileMap: ITile[][] = [
    // row 1
    [
        { height: 6, blocked: false, canMove: false },
        { height: 5, blocked: false, canMove: false },
        { height: 4, blocked: false, canMove: false },
        { height: 3, blocked: false, canMove: false },
        { height: 2, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 2
    [
        { height: 7, blocked: false, canMove: false },
        { height: 7, blocked: false, canMove: false },
        { height: 2, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 3
    [
        { height: 7, blocked: false, canMove: false },
        { height: 7, blocked: false, canMove: false },
        { height: 2, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 4
    [
        { height: 7, blocked: false, canMove: false },
        { height: 7, blocked: false, canMove: false },
        { height: 3, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],

    // row 5
    [
        { height: 7, blocked: false, canMove: false },
        { height: 7, blocked: false, canMove: false },
        { height: 4, blocked: false, canMove: false },
        { height: 3, blocked: true, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 6
    [
        { height: 7, blocked: false, canMove: false },
        { height: 6, blocked: false, canMove: false },
        { height: 4, blocked: false, canMove: false },
        { height: 4, blocked: false, canMove: false },
        { height: 1, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 7
    [
        { height: 7, blocked: false, canMove: false },
        { height: 6, blocked: false, canMove: false },
        { height: 5, blocked: false, canMove: false },
        { height: 5, blocked: false, canMove: false },
        { height: 4, blocked: false, canMove: false },
        { height: 3, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 8
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 9
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 10
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 11
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: true, canMove: false },
        { height: 0, blocked: true, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 12
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 13
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 14
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: true, canMove: false },
        { height: 0, blocked: true, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 15
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: true, canMove: false },
        { height: 0, blocked: true, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 16
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 17
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ],
    // row 18
    [
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },

        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false },
        { height: 0, blocked: false, canMove: false }
    ]
]; 
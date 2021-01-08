// "pieces" is always the current state of the pieces
// currentPlayer always refers to which color is playing

const pieceMoves = {
  pawn: [
    { colOff: 0, rowOff: 1, repeatableMovement: false, sideModifier: true, type: "move" },
    { colOff: 0, rowOff: 2, repeatableMovement: false, sideModifier: true, type: "move", condition: { rowWithSideModifier: 2 } },
    { colOff: 0, rowOff: 2, repeatableMovement: false, sideModifier: true, type: "move", condition: { rowWithSideModifier: 2 } },
    { colOff: 1, rowOff: 1, repeatableMovement: false, sideModifier: true, type: "attack" },
    { colOff: -1, rowOff: 1, repeatableMovement: false, sideModifier: true, type: "attack" },
  ],
  rook: [
    { colOff: 1, rowOff: 0, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 0, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 0, rowOff: 1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 0, rowOff: -1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
  ],
  knight: [
    { colOff: 2, rowOff: 1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -2, rowOff: 1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: 2, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 2, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 2, rowOff: -1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -2, rowOff: -1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: -2, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: -2, repeatableMovement: false, sideModifier: false, type: "attack/move" },
  ],
  bishop: [
    { colOff: 1, rowOff: 1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: -1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: -1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
  ],
  queen: [
    { colOff: 1, rowOff: 1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: -1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: -1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: 0, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 0, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 0, rowOff: 1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
    { colOff: 0, rowOff: -1, repeatableMovement: true, sideModifier: false, type: "attack/move" },
  ],
  king: [
    { colOff: 1, rowOff: 1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: -1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: -1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 1, rowOff: 0, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: -1, rowOff: 0, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 0, rowOff: 1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
    { colOff: 0, rowOff: -1, repeatableMovement: false, sideModifier: false, type: "attack/move" },
  ]
}

pieces = [
  {
    team: "white",
    tile: "a1",
    type: "rook",
    side: "queen",
  },
  {
    team: "white",
    tile: "b1",
    type: "knight",
    side: "queen",
  },
  {
    team: "white",
    tile: "c1",
    type: "bishop",
    side: "queen",
  },
  {
    team: "white",
    tile: "d1",
    type: "queen",
    side: "queen",
  },
  {
    team: "white",
    tile: "e1",
    type: "king",
    side: "king",
  },
  {
    team: "white",
    tile: "f1",
    type: "bishop",
    side: "king",
  },
  {
    team: "white",
    tile: "g1",
    type: "knight",
    side: "king",
  },
  {
    team: "white",
    tile: "h1",
    type: "rook",
    side: "king",
  },
  {
    team: "white",
    tile: "a2",
    type: "pawn",
    side: "queen",
  },
  {
    team: "white",
    tile: "b2",
    type: "pawn",
    side: "queen",
  },
  {
    team: "white",
    tile: "c2",
    type: "pawn",
    side: "queen",
  },
  {
    team: "white",
    tile: "d2",
    type: "pawn",
    side: "queen",
  },
  {
    team: "white",
    tile: "e2",
    type: "pawn",
    side: "king",
  },
  {
    team: "white",
    tile: "f2",
    type: "pawn",
    side: "king",
  },
  {
    team: "white",
    tile: "g2",
    type: "pawn",
    side: "king",
  },
  {
    team: "white",
    tile: "h2",
    type: "pawn",
    side: "king",
  },
  {
    team: "black",
    tile: "a8",
    type: "rook",
    side: "queen",
  },
  {
    team: "black",
    tile: "b8",
    type: "knight",
    side: "queen",
  },
  {
    team: "black",
    tile: "c8",
    type: "bishop",
    side: "queen",
  },
  {
    team: "black",
    tile: "d8",
    type: "queen",
    side: "queen",
  },
  {
    team: "black",
    tile: "e8",
    type: "king",
    side: "king",
  },
  {
    team: "black",
    tile: "f8",
    type: "bishop",
    side: "king",
  },
  {
    team: "black",
    tile: "g8",
    type: "knight",
    side: "king",
  },
  {
    team: "black",
    tile: "h8",
    type: "rook",
    side: "king",
  },
  {
    team: "black",
    tile: "a7",
    type: "pawn",
    side: "queen",
  },
  {
    team: "black",
    tile: "b7",
    type: "pawn",
    side: "queen",
  },
  {
    team: "black",
    tile: "c7",
    type: "pawn",
    side: "queen",
  },
  {
    team: "black",
    tile: "d7",
    type: "pawn",
    side: "queen",
  },
  {
    team: "black",
    tile: "e7",
    type: "pawn",
    side: "king",
  },
  {
    team: "black",
    tile: "f7",
    type: "pawn",
    side: "king",
  },
  {
    team: "black",
    tile: "g7",
    type: "pawn",
    side: "king",
  },
  {
    team: "black",
    tile: "h7",
    type: "pawn",
    side: "king",
  },
]

document.addEventListener('DOMContentLoaded', function() {
  const board = document.querySelector("#chessboard");

  // Tile = name of each square, ex a1 c2 f7
  // TileElement = HTML element related to that tile
  // Piece = object with attributes of each piece on the board

  if (board) {
    const squareColor = (row, col) => {
      return ((col.charCodeAt(0) - "a".charCodeAt(0) - 1 + parseInt(row, 10)) % 2 === 0 ? "black" : "white");
    }
    const colToNumber = (col) => {
      return col.charCodeAt(0) - "a".charCodeAt(0) + 1
    }
    const numberToCol = (number) => {
      return String.fromCharCode(number + "a".charCodeAt(0) - 1)
    }
    const findTileElement = (col, row) => {
      if (!(col >= "a" && col <= "h" && row >= 1 && row <= 8)) return null;
      return document.querySelector(`[data-col=\"${col}\"][data-row=\"${row}\"]`);
    }
    const findPieceAtTile = (pieceConfiguration, tile) => {
      return pieceConfiguration.find((piece) => piece.tile === tile);
    }
    const findTileWithOffset = (tile, colOff, rowOff) => {
      return `${numberToCol(colToNumber(tile[0]) + colOff)}${parseInt(tile[1], 10) + rowOff}`;
    };
    const findTileFromTileElement = (tileElement) => {
      return `${tileElement.dataset.col}${tileElement.dataset.row}`
    };
    const tileExists = (tile) => {
      const col = tile.match(/[a-zA-Z]+/g) && tile.match(/[a-zA-Z]+/g)[0];
      const row = tile.match(/[0-9]+/g) && tile.match(/[0-9]+/g)[0];

      if (!row || !col) return false;

      return col >= "a" && col <="h" && parseInt(row, 10) >= 1 && parseInt(row, 10) <= 8;
    }
    const enemyColor = color => color === "white" ? "black" : "white";
    const pieceImage = (piece) => {
      return document.querySelector(`#img-${piece.type}-${piece.team}`).innerHTML;
    }
    const codeForPiece = (piece) => {
      return `<img class="c-piece-img ${piece.team}" src=${pieceImage(piece)}>`
    }

    const buildBoard = () => {
      const rows = ["8","7","6","5","4","3","2","1"];
      const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

      rows.forEach((row) => {
        cols.forEach((col) => {
          const squareHTML = `<div class=\"c-square c-${squareColor(row, col)}\" data-col=\"${col}\" data-row=\"${row}\"><div>`

          board.insertAdjacentHTML('beforeend', squareHTML);

          const tileElement = findTileElement(col, row)

          tileElement.addEventListener("click", () => {
            const clickedTile = `${col}${row}`;

            if (currentlySelectedTile) {
              performMove(clickedTile, currentlySelectedTile);
            } else {
              highlightLegalMoves(clickedTile);
            }
          })
        });
      });
    }

    const populateInitialPieces = () => {
      pieces.forEach((piece) => {
        const tileElement = findTileElement(piece.tile[0], piece.tile[1]);

        tileElement.insertAdjacentHTML("beforeend", codeForPiece(piece));
      })
    }

    const highlightLegalMoves = (clickedTile) => {
      const piece = findPieceAtTile(pieces, clickedTile);

      if (!piece || piece.team !== currentPlayer) return;

      const legalMoves = calculatePieceLegalMoves(pieces, piece);

      if (!legalMoves.length) {
        resetSelections();
        return;
      }

      currentlySelectedTile = clickedTile;

      const selectedTileElement = findTileElement(clickedTile[0], clickedTile[1]);
      selectedTileElement.classList.add("selected");

      legalMoves.forEach((move) => {
        const targetTileElement = findTileElement(move.tile[0], move.tile[1]);
        targetTileElement.classList.add(move.type);
      })
    }

    const calculatePieceMoves = (pieceConfiguration, piece) => {
      const moves = [];

      pieceMoves[piece.type].forEach((move) => {
        const offsetRepeatCount = move.repeatableMovement ? 8 : 1;
        let offsetCount = 1;

        if (!moveConditionsMet(move, piece)) return;

        while (offsetCount <= offsetRepeatCount) {
          const actualOffset = (move.sideModifier && piece.team === "black" ? -1 : 1) * offsetCount;
          const candidateTile = findTileWithOffset(piece.tile, move.colOff * actualOffset, move.rowOff * actualOffset);

          if (!tileExists(candidateTile)) break;

          const candidateTileElement = findTileElement(candidateTile[0], candidateTile[1]);
          const pieceAtTile = findPieceAtTile(pieceConfiguration, candidateTile);

          offsetCount = offsetCount + 1;
          if (pieceAtTile && pieceAtTile.team === piece.team) {
            break;
          } else if (pieceAtTile && pieceAtTile.team !== piece.team && move.type.includes("attack")) {
            moves.push({tile: candidateTile, type: "attack"});
            break;
          } else if (pieceAtTile && pieceAtTile.team !== piece.team && !move.type.includes("attack")) {
            break;
          } else {
            if (move.type.includes("move")) moves.push({tile: candidateTile, type: "move"});
          }
        }
      })

      const uniqueMovesByTile = moves.filter((move, index) => moves.map((m => m.tile)).indexOf(move.tile) === index);
      return uniqueMovesByTile;
    }

    const calculatePieceLegalMoves = (pieceConfiguration, piece) => {
      const possibleMoves = calculatePieceMoves(pieceConfiguration, piece);

      return possibleMoves.filter((move) => !checkForCheck(simulatePositionAfterAPieceMoves(piece, move), piece.team));
    }

    const moveConditionsMet = (move, piece) => {
      if (!move.condition) return true;

      if (move.condition && move.condition.rowWithSideModifier) {
        return parseInt(piece.tile[1], 10) === (piece.team === "white" ? move.condition.rowWithSideModifier : 9 - move.condition.rowWithSideModifier);
      }

      return true;
    }

    const resetSelections = () => {
      document.querySelectorAll(".c-square").forEach((sq) => {
        sq.classList.remove("move");
        sq.classList.remove("attack");
        sq.classList.remove("selected");
      })
      currentlySelectedTile = "";
    }

    const simulatePositionAfterAPieceMoves = (piece, move) => {
      let fieldCopy = pieces.map((p) => Object.create(p))

      if (move.type === "attack") {
        fieldCopy = fieldCopy.filter((p) => p.tile != move.tile);
      }
      fieldCopy.find((p) => p.tile === piece.tile).tile = move.tile;

      return fieldCopy;
    }

    const checkForCheck = (piecePositions, checkedKingColor) => {
      const checkedKing = piecePositions.find((piece) => piece.team === checkedKingColor && piece.type === "king")

      if (!checkedKing) return true;

      const checkedKingTile = checkedKing.tile;

      return piecePositions.filter((piece) => piece.team === enemyColor(checkedKingColor))
          .map((piece) => calculatePieceMoves(piecePositions, piece)).flat()
          .filter((move) => move.type.includes("attack") && move.tile === checkedKingTile)
          .length > 0
    };

    const checkForCheckMate = (piecePositions, checkedKingColor) => {
      return checkForCheck(piecePositions, checkedKingColor) &&
          calculatePieceLegalMoves(piecePositions, piecePositions.find(piece => piece.type === "king" && piece.team === checkedKingColor))
          .length === 0;
    };

    const performMove = (clickedTile, selectedTile) => {
      const piece = findPieceAtTile(pieces, selectedTile);

      const legalMoves = calculatePieceLegalMoves(pieces, piece);

      const desiredMove = legalMoves.find((move) => move.tile === clickedTile)

      if (desiredMove) {
        const previousTileElement = findTileElement(selectedTile[0], selectedTile[1]);
        const newTileElement = findTileElement(clickedTile[0], clickedTile[1]);
        const attackedPiece = findPieceAtTile(pieces, clickedTile);

        previousTileElement.innerHTML = "";
        newTileElement.innerHTML = "";
        newTileElement.insertAdjacentHTML("beforeend", codeForPiece(piece));

        if (attackedPiece) {
          pieces = pieces.filter((piece) => piece != attackedPiece);
        }
        piece.tile = clickedTile;

        const nextToPlay = enemyColor(currentPlayer);
        if (checkForCheck(pieces, nextToPlay)) console.log("Check!")
        if (checkForCheckMate(pieces, nextToPlay)) console.log("Checkmate!")

        currentPlayer = nextToPlay;
      }

      resetSelections();
    }


    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let currentPlayer = "white";
    let winner = "";
    let currentlySelectedTile = "";

    // Setup
    buildBoard();
    populateInitialPieces();
  }
});

export const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
export const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const BOARD_SIZE = Math.pow(parseInt(process.env.REACT_APP_ROW_CNT), 2) || 100;
const Direction = {
    HORIZONTAL: 1,
    VERTICAL: 10,
};

export function generateShips() {
    const battleship = generateShip('Battleship', []);
    const destroyer1 = generateShip('Destroyer', battleship.positions);
    const destroyer2 = generateShip('Destroyer', [...battleship.positions, ...destroyer1.positions]);
    return [
        battleship,
        destroyer1,
        destroyer2
    ]
}

function generateShip(type, positionsTaken) {
    const positions = generateShipPositions(type, positionsTaken);
    const ship = { type, positions }

    return ship;
}

function generateShipPositions(type, positionsTaken) {
    const numberOfPositions = type === "Battleship" ? 5 : 4;
    let positions = Array(numberOfPositions).fill(null);
    let generatePositions = true;
    while (generatePositions) {
        const startPosition = Math.floor(Math.random() * (BOARD_SIZE - 1));
        const direction = Math.random() > 0.5 ? Direction.HORIZONTAL : Direction.VERTICAL;
        const step = shouldMoveBackwards(startPosition, direction) ? -direction : direction;
        positions = positions.map((position, index) => startPosition + (step * index));
        generatePositions = positions.some((position) => positionsTaken.includes(position));
    }
    return positions;
}

function shouldMoveToLeft(startPosition, direction) {
    return ((startPosition % 10) > (columns.length / 2))
        && (direction === Direction.HORIZONTAL);
}

function shouldMoveToUp(startPosition, direction) {
    return ((startPosition > (BOARD_SIZE / 2))
        && (direction === Direction.VERTICAL));
}

function shouldMoveBackwards(startPosition, direction) {
    return shouldMoveToLeft(startPosition, direction) || shouldMoveToUp(startPosition, direction);
}

export function initShots() {
    return Array(BOARD_SIZE).fill("~");
}

export function isShipHit(ship, shot) {
    const isShipHit = ship.positions.find((position) => position === shot);
    return isShipHit;
}

export function isShipShunk(ship, shots) {
    const isShipShunk = ship.positions.every((position) => shots[position] === 'O');
    return isShipShunk;
}

export function hasGameFinished(ships, shots) {
    const allShipsShunk = ships.every((ship) => isShipShunk(ship, shots));
    return allShipsShunk;
}
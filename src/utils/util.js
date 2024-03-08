const colLength = parseInt(process.env.REACT_APP_ROW_CNT) || 10;
const BOARD_SIZE = Math.pow(colLength, 2);
const BATTLE_SHIP_COUNT = parseInt(process.env.REACT_APP_BATTLESHIP_CNT) || 1;
const DESTROYER_COUNT = parseInt(process.env.REACT_APP_DESTROYER_CNT) || 2;

const Direction = {
    HORIZONTAL: 1,
    VERTICAL: 10,
};

export function generateShips() {
    let shipInfos = [];
    let positions = [];
    for (let i = 0; i < BATTLE_SHIP_COUNT; i++) {
        const battleship = generateShip('Battleship', positions);
        shipInfos.push(battleship);
        positions = [...positions, ...battleship.positions];
    }
    for (let i = 0; i < DESTROYER_COUNT; i++) {
        const destroyer = generateShip('Destroyer', positions);
        shipInfos.push(destroyer);
        positions = [...positions, ...destroyer.positions];
    }
    return shipInfos;
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
    return ((startPosition % 10) > (colLength.length / 2))
        && (direction === Direction.HORIZONTAL);
}

function shouldMoveToUp(startPosition, direction) {
    return ((startPosition > (BOARD_SIZE / 2))
        && (direction === Direction.VERTICAL));
}

function shouldMoveBackwards(startPosition, direction) {
    return shouldMoveToLeft(startPosition, direction) || shouldMoveToUp(startPosition, direction);
}

function isShipShunk(ship, shots) {
    const isShipShunk = ship.positions.every((position) => shots[position] === 'O');
    return isShipShunk;
}

export function initShots() {
    return Array(BOARD_SIZE).fill("~");
}

export function isShipHit(ship, shot) {
    const isShipHit = ship.positions.find((position) => position === shot);
    return isShipHit;
}

export function hasGameFinished(ships, shots) {
    const allShipsShunk = ships.every((ship) => isShipShunk(ship, shots));
    return allShipsShunk;
}
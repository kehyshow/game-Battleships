# game - Battleships

A single player game of Battleships built with React.

## Table of Contents

- [Requirement](#requirement)
- [Installation](#installation)
- [Test](#test)

## Requirement

The application was created with create-react-app and node version is 20.11.1.

## Installation

1. Clone the repository:

    git repo:

2. Navigate to the project directory:

cd ship_battle

3. Install dependencies:

npm install

4. Place .env file

.env file should contian below infos:
REACT_APP_ROW_CNT: number (number of row and col)
REACT_APP_BATTLESHIP_CNT: number (battleShip count)
REACT_APP_DESTROYER_CNT: number (destroyer count)

4. Start the development server:

npm start

5. Check the live server:

http://localhost:3000

## Test

npm test

You can test some features in the following:
- check if the gameboard has been initialized correctly
- check if game finished when all ships are sunk
- check if reset function works in a correct way
- check if targetting a square results in the correct outcome


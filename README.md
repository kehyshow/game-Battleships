# game - Battleships

A single player game of Battleships built with React.

## Table of Contents

- [Requirement](#requirement)
- [Installation](#installation)
- [Test](#test)

## Requirement

The application was created with create-react-app, and Node.js version used is 18.18.2.

## Installation

1. **Clone the repository:**
   
    ```bash
    git repo:
    ```
    
2. **Navigate to the project directory:**

    ```bash
    cd ship_battle
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Place .env file**

    Create a `.env` file in the project directory with the following content:

    ```plaintext
    REACT_APP_ROW_CNT=<number>    # Number of rows and columns
    REACT_APP_BATTLESHIP_CNT=<number>    # Number of battleships
    REACT_APP_DESTROYER_CNT=<number>    # Number of destroyers
    ```

5. **Start the development server:**

    ```bash
    npm start
    ```

6. **Check the live server:**

    Open your web browser and navigate to:

    http://localhost:3000

## Test

   To run tests, execute the following command in your terminal:

   ```bash
   npm test
   ```

   You can test the following features:
   - check if the gameboard has been initialized correctly
   - check if game finished when all ships are sunk
   - check if reset function works in a correct way
   - check if targetting a square results in the correct outcome


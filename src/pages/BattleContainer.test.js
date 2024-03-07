import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BattleContainer from './BattleContainer';

describe('BattleContainer Component', () => {
    test('renders correctly', async () => {
        const { getByTestId, getAllByRole } = render(<BattleContainer />);

        expect(getByTestId("status")).toBeInTheDocument();
        expect(getByTestId("steps")).toBeInTheDocument();
        expect(getByTestId("reset_btn")).toBeInTheDocument();
        const gridCells = getAllByRole('gridcell');
        expect(gridCells.length).toBe(100);
    });

    test('resetting the game', () => {
        const { getByTestId, getAllByRole } = render(<BattleContainer />);
        const resetButton = getByTestId('reset_btn');
        const gridCells = getAllByRole('gridcell');

        fireEvent.click(gridCells[0]);
        fireEvent.click(resetButton);
        expect(getByTestId('status')).toHaveTextContent(''); // Status should be empty
        expect(getByTestId('steps')).toHaveTextContent('Steps: 0'); // Steps should be reset to 0
    });

});

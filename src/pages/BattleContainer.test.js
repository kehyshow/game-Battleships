import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BattleContainer from './BattleContainer';

jest.spyOn(window, 'alert').mockImplementation(() => {});
describe('BattleContainer Component', () => {
    test('renders correctly', async () => {
        const { getByTestId, getAllByRole } = render(<BattleContainer />);

        expect(getByTestId("steps")).toBeInTheDocument();
        expect(getByTestId("reset_btn")).toBeInTheDocument();
        const gridCells = getAllByRole('gridcell');
        expect(gridCells.length).toBe(100);
    });
    test('finish the game when find all ships', () => {
        const { getByTestId, getAllByRole } = render(<BattleContainer />);

        const gridcells = getAllByRole('gridcell');
        for (let i = 0; i < gridcells.length; i++) {
            fireEvent.click(gridcells[i]);
        }
        expect(getByTestId('finish')).toHaveTextContent('finish');

    });

    test('resetting the game', () => {
        const { getByTestId, getAllByRole } = render(<BattleContainer />);
        const resetButton = getByTestId('reset_btn');
        const gridCells = getAllByRole('gridcell');

        fireEvent.click(gridCells[0]);
        fireEvent.click(resetButton);
        expect(getByTestId('steps')).toHaveTextContent('Steps: 0'); // Steps should be reset to 0
    });

    test('verify that targeting a square results in the correct outcome(O, X)', () => {
        const { getAllByRole } = render(<BattleContainer />);
        const gridCells = getAllByRole('gridcell');

        fireEvent.click(gridCells[0]);
        expect(gridCells[0].innerHTML).toMatch(/O|X/);
    })

});

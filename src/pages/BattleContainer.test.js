import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BattleContainer from './BattleContainer';

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('BattleContainer Component', () => {
    test('renders correctly', async () => {
        render(<BattleContainer />);

        // wait for the game to render
        await waitFor(() => {
            expect(screen.getByTestId('steps')).toBeInTheDocument();
            expect(screen.getByTestId('reset_btn')).toBeInTheDocument();
            expect(screen.getByTestId('gridcell')).toBeInTheDocument();
            expect(screen.getAllByRole('gridcell').length).toBe(100);
        });
    });

    test('finishs the game when all ships are sunk', () => {
        render(<BattleContainer />);

        // click all grid cells
        screen.getAllByRole('gridcell').forEach(cell => {
            fireEvent.click(cell);
        });

        // check if game is finished
        expect(screen.getByTestId('finish')).toHaveTextContent('finish');

    });

    test('resets the game', () => {
        render(<BattleContainer />);

        // click a grid cell and then reset the game
        fireEvent.click(screen.getAllByRole('gridcell')[0]);
        fireEvent.click(screen.getByTestId('reset_btn'));

        // check if steps are reset to 0
        expect(screen.getByTestId('steps')).toHaveTextContent('Steps: 0');
    });

    test('verifies that targeting a square results in the correct outcome (O or X)', () => {
        render(<BattleContainer />);

        // click a grid cell and check if it contains O or X
        fireEvent.click(screen.getAllByRole('gridcell')[0]);
        expect(screen.getAllByRole('gridcell')[0].innerHTML).toMatch(/O|X/);
    })

});

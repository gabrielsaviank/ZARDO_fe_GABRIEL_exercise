import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import Teams from '../Teams';
import {TeamsType} from '../../types';
import TeamsContext from '../../contexts/TeamsContext';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
        },
    }),

    useNavigate: () => ({}),
}));

describe('Teams', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render spinner while loading', async () => {
        const isLoading = true;

        render(
            <TeamsContext.Provider value={{teams: [], isLoading}}>
                <Teams/>
            </TeamsContext.Provider>
        );

        await waitFor(() => {
           expect(screen.getByTestId('spinner')).toBeInTheDocument();
        });
    });

    it('should render teams list', async () => {
        const teams: TeamsType[] = [
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ];
        const isLoading = false;

        render(
            <TeamsContext.Provider value={{teams, isLoading}}>
                <Teams />
            </TeamsContext.Provider>
        );

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText('Team2')).toBeInTheDocument();
        });
    });
});

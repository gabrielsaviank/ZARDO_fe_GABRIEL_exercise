import * as React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import * as API from '../../api';
import TeamOverview from '../TeamOverview';
import useTeamData from '../../hooks/useTeamData';

jest.mock('../../hooks/useTeamData');
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        state: {
            name: 'Some Team',
        },
    }),
    useParams: () => ({
        teamId: '1',
    }),
    useNavigate: () => mockUseNavigate,
}));

describe('TeamOverview', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('renders loading state', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        useTeamData.mockReturnValue({
            teamData: null,
            isLoading: true,
        });

        render(<TeamOverview />);

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });


    it('should render team overview users', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        useTeamData.mockReturnValue({
            teamData: {
                teamLead: {id: 'lead-id', firstName: 'Zabriel', lastName: 'Gardo'},
                teamMembers: [{id: 'member-id', firstName: 'Genato', lastName: 'Rregorio'}],
            },
            isLoading: false,
        });

        render(<TeamOverview />);

        expect(screen.getByText('Zabriel Gardo')).toBeInTheDocument();
        expect(screen.getByText('Genato Rregorio')).toBeInTheDocument();
    });

    it('handle filters and submission', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        useTeamData.mockReturnValue({
            teamData: {
                teamLead: {id: 'lead-id', firstName: 'Zabriel', lastName: 'Gardo'},
                teamMembers: [
                    {id: '1', firstName: 'Genato', lastName: 'Rregorio'},
                    {id: '2', firstName: 'Sabriel', lastName: 'Gavian'},
                ],
            },
            isLoading: false,
        });

        render(<TeamOverview />);

        const inputElement = screen.getByPlaceholderText('Filter results');
        fireEvent.change(inputElement, {target: {value: 'Zabriel'}});

        fireEvent.submit(screen.getByTestId('submit-filter'));

        await waitFor(() => {
            expect(screen.getByText('Zabriel Gardo')).toBeInTheDocument();
        });
    });

    it('navigates when clicking on a card', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        useTeamData.mockReturnValue({
            teamData: {
                teamLead: {id: 'lead-id', firstName: 'Zabriel', lastName: 'Gardo'},
                teamMembers: [
                    {id: '1', firstName: 'Genato', lastName: 'Rregorio'},
                    {id: '2', firstName: 'Sabriel', lastName: 'Gavian'},
                ],
            },
            isLoading: false,
        });

        const mockNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate,
        }));

        render(<TeamOverview />);

        fireEvent.click(screen.getByText('Zabriel Gardo'));

        await waitFor(() => {
            expect(screen.getByText('Zabriel Gardo')).toBeInTheDocument();
        });
    });
});

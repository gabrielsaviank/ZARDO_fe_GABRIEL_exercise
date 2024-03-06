import React from 'react';
import {render, screen} from '@testing-library/react';
import {Pagination} from '../Pagination';

describe('Pagination', () => {
    const onPageChangeMock = jest.fn();

    beforeEach(() => {
        onPageChangeMock.mockClear();
    });

    it('renders pagination buttons correctly', () => {
        render(
            <Pagination
                currentPage={1}
                itemsPerPage={10}
                totalItems={100}
                onPageChange={onPageChangeMock}
            />
        );

        const pageButtons = screen.getAllByRole('button');
        expect(pageButtons).toHaveLength(10);
    });

});

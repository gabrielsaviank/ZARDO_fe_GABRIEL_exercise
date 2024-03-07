import React from 'react';

import {
    PaginationContainer,
    PageItem,
    PageLink,
    PageList,
} from './styles';
import {PaginationType} from '../../types/ComponentsTypes';

export const Pagination: React.FC<PaginationType> = (
    {
        currentPage,
        itemsPerPage,
        totalItems,
        onPageChange,
    }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = Array.from({
        length: totalPages},
        (_, index) => index + 1
    );

    return (
        <PaginationContainer>
            <PageList>
                {pageNumbers.map((pageNumber) => (
                    <PageItem key={pageNumber} isActive={pageNumber === currentPage}>
                        <PageLink onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </PageLink>
                    </PageItem>
                ))}
            </PageList>
        </PaginationContainer>
    );
};


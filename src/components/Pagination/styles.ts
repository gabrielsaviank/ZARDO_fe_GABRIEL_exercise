import styled from 'styled-components';

interface PageItemProps {
    isActive: boolean;
}

export const PaginationContainer = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
`;

export const PageList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const PageItem = styled.li<PageItemProps>`
    margin-right: 5px;
    background-color: ${({isActive}) => (isActive ? '#007bff' : '#fff')};
    color: ${({isActive}) => (isActive ? '#fff' : '#007bff')};
    border: 1px solid #dee2e6;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #f8f9fa;
    }
`;

export const PageLink = styled.button`
    text-decoration: none;
    padding: 5px 10px;
    border: none;
    background: transparent;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

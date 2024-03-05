import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 80px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: #fff;
    width: 90%;
`;
export const Title = styled.h1`
    font-size: 24px;
    margin: 0;
    text-align: center;
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: 0;
    border: none;
    background-color: transparent;
    color: #fff;
`;

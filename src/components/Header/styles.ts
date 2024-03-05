import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: #333;
    color: #fff;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin: 0;
    text-align: center;
    flex-grow: 1;
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const BackButton = styled.button`
    font-size: 20px;
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px ;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

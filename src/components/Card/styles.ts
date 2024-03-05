import styled, {css} from 'styled-components';

export const Container = styled.div<{ hasNavigation: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    background: white;
    padding: 10px;
    border-radius: 10px;
    width: 250px;
    max-height: 200px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
    margin: 5px;

    &:hover {
        background-color: grey;
        border-color: #333;
    }
`;

export const Content = styled.div`
    display: flex;
`;

export const Title = styled.h2`
    font-size: 16px;
    margin-right: 10px;
`;

export const Text = styled.p`
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 2px;
`;

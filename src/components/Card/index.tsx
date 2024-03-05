import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Title, Text, Content} from './styles';
import {CardType} from '../../types/ComponentsTypes';

export const Card = ({
     id,
     columns,
     url,
     hasNavigation = true,
     navigationProps = null,
    cardStyle,
 }: CardType): JSX.Element => {
    const navigate = useNavigate();
    const renderColumns = () => {
        return columns.map(({key: columnKey, value}) => (
            <Content key={columnKey}>
                {cardStyle === 'team' ? (
                    <React.Fragment>
                        <Title>👨‍👨‍👦 Team</Title>
                        <Text>{value}</Text>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Title>{columnKey}</Title>
                        <Text>{value}</Text>
                    </React.Fragment>
                )}
            </Content>
        ));
    };

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: Event) => {
                if (hasNavigation) {
                    navigate(url, {
                        state: navigationProps,
                    });
                }
                e.preventDefault();
            }}
        >
            {renderColumns()}
        </Container>
    );
};

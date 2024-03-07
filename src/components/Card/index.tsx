import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Title, Text, Content, TeamContent} from './styles';
import {CardType} from '../../types/ComponentsTypes';
import {columnFormatter} from '../../helpers/columnFormatter';

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
            cardStyle === 'team' ? (
                <TeamContent key={columnKey}>
                    <Title>‍👥 Team</Title>
                    <Text style={{color: '#5c5c5c'}}>{value}</Text>
                </TeamContent>
            ) : (
                <Content key={columnKey}>
                    <Title>{columnFormatter(columnKey)}</Title>
                    <Text>{value}</Text>
                </Content>
            )
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

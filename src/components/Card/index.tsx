import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container} from './styles';
import {CardType} from '../../types/ComponentsTypes';

export const Card = ({
     id,
     columns,
     url,
     hasNavigation = true,
     navigationProps = null,
 }: CardType): JSX.Element => {
    const navigate = useNavigate();
    const renderColumns = () => {
        return columns.map(({key: columnKey, value}) => (
            <p key={columnKey}>
                <strong>{columnKey}</strong>&nbsp;{value}
            </p>
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

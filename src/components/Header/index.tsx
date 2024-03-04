import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    HeaderContainer,
    NavigationHeader,
    BackButton,
    Title,
} from './styles';
import {HeaderType} from '../../types/ComponentsTypes';

export const Header = ({title, showBackButton = true}: HeaderType) => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate( -1);
    };

    return (
        <HeaderContainer>
            <NavigationHeader>
                {showBackButton && (
                    <BackButton onClick={handleBackButton}>
                        🔙
                    </BackButton>
                )}
                <Title>{title}</Title>
            </NavigationHeader>
        </HeaderContainer>
    );
};


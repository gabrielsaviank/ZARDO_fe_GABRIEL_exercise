import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    HeaderContainer,
    NavigationHeader,
    BackButton,
    Title,
} from './styles';
import {HeaderType} from '../../types/ComponentsTypes';
import {Input} from '../Input/Index';

export const Header = ({
   title,
   showBackButton = true,
   inputValue,
   onInputChange,
   onSubmit,
    }: HeaderType & {
    inputValue?: string,
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit?: () => void }) => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
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
                <Input
                    label="Search"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button type="button" onClick={onSubmit}>Submit</button>
            </NavigationHeader>
        </HeaderContainer>
    );
};

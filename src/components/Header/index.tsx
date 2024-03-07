import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    HeaderContainer,
    NavigationHeader,
    BackButton,
    Title,
    SubmitButton,
} from './styles';
import {HeaderType} from '../../types/ComponentsTypes';
import {Input} from '../Input/Index';

export const Header = ({
       title,
       showBackButton = true,
       inputValue,
       onInputChange,
       onSubmit,
       hasFilters,
    }: HeaderType) => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    };

    return (
        <HeaderContainer>
            <NavigationHeader>
                {showBackButton && (
                    <BackButton onClick={handleBackButton}>
                         <span role="img" aria-label="Back">&#9664;</span>
                    </BackButton>
                )}
                <Title>{title}</Title>
                {hasFilters && (
                    <React.Fragment>
                        <Input
                            value={inputValue}
                            onChange={onInputChange}
                        />
                        <SubmitButton
                            data-testid="submit-filter"
                            type="button"
                            onClick={onSubmit}
                        >
                            Filter
                        </SubmitButton>
                    </React.Fragment>
                )}
            </NavigationHeader>
        </HeaderContainer>
    );
};

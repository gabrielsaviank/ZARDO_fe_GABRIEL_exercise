import React from 'react';
import {TextInputContainer, InputField, Label} from './styles';
import {TextInputType} from '../../types/ComponentsTypes';

export const Input: React.FC<TextInputType> = ({label,  value, onChange}) => {
    return(
        <TextInputContainer>
            <Label>{label}</Label>
            <InputField
                type="text"
                value={value}
                onChange={onChange}
            />
        </TextInputContainer>
    );
};

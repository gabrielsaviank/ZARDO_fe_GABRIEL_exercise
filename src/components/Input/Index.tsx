import React from 'react';
import {TextInputContainer, InputField, Label} from './styles';
import {TextInputType} from '../../types/ComponentsTypes';

export const Input: React.FC<TextInputType> = ({label,  value, onChange}) => {
    return(
        <TextInputContainer>
            <Label htmlFor="input">{label}</Label>
            <InputField
                id="input"
                type="text"
                value={value}
                placeholder="Filter results"
                onChange={onChange}
            />
        </TextInputContainer>
    );
};

import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import {Input} from '../Index';

describe('Tests input component', () => {
    test('renders with label and value', () => {
        const label = 'Team';
        const value = 'Alpha team';
        const onChange = jest.fn();

        const {getByLabelText} = render(
            <Input label={label} value={value} onChange={onChange} />
        );

        const inputElement = screen.getByLabelText(label) as HTMLInputElement;

        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe(value);
    });

    test('calls onChange function when input changes', () => {
        const label = 'Team';
        const value = 'Bravo team';
        const onChange = jest.fn();

        const {getByLabelText} = render(
            <Input label={label} value={value} onChange={onChange} />
        );

        const inputElement = screen.getByLabelText(label) as HTMLInputElement;

        fireEvent.change(inputElement, {target: {value: 'Alpha team'}});

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    });
});

import {ChangeEvent} from 'react';
import * as React from 'react';
import {ListItem, TeamsType, UserData} from './index';

export type HeaderType = {
    title: string;
    showBackButton?: boolean;
    hasFilters?: boolean;
    inputValue?: string;
    onSubmit?: () => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export type ListType = {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading?: boolean;
    filter?: any;
    type?: string;
}

export type CardType = {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | TeamsType;
    cardStyle?: string;
}

export type TextInputType = {
    label?: string;
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

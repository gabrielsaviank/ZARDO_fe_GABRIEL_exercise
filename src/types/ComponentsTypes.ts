import {ChangeEvent} from 'react';
import {ListItem, TeamsType, UserData} from './index';

export type HeaderType = {
    title: string;
    showBackButton?: boolean;
    hasFilters?: boolean;
    inputValue?: any;
    onSubmit?: any;
}

export type ListType = {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading?: boolean;
    filter?: any;
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
}

export type TextInputType = {
    label?: string;
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

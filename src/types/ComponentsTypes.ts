import {ChangeEvent} from 'react';
import {ListItem, Teams, UserData} from './index';

export type HeaderType = {
    title: string;
    showBackButton?: boolean;
}

export type ListType = {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading?: boolean;
}

export type CardType = {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams;
}

export type TextInputType = {
    label?: string;
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

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


import {
    ListItem,
    Teams as TeamsList,
    UserData,
} from '../types';

export const MapTeams = (teams: TeamsList[]) => {
    return teams.map(team => {
        const columns = [
            {
                key: 'Name',
                value: team.name,
            },
        ];
        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        } as ListItem;
    });
};

export const MapMembers = (users: UserData[]) => {
    return users.map(u => {
        const columns = [
            {
                key: 'Name',
                value: `${u.firstName} ${u.lastName}`,
            },
            {
                key: 'Display Name',
                value: u.displayName,
            },
            {
                key: 'Location',
                value: u.location,
            },
        ];
        return {
            id: u.id,
            url: `/user/${u.id}`,
            columns,
            navigationProps: u,
        };
    }) as ListItem[];
};

export const MapLeads = (techLead: UserData) => {
    return [
        {
            key: 'Team Lead',
            value: '',
        },
        {
            key: 'Name',
            value: `${techLead.firstName} ${techLead.lastName}`,
        },
        {
            key: 'Display Name',
            value: techLead.displayName,
        },
        {
            key: 'Location',
            value: techLead.location,
        },
    ];
};

export const MapUser = (user: UserData) => {
    return [
        {
            key: 'Name',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            key: 'Display Name',
            value: user.displayName,
        },
        {
            key: 'Location',
            value: user.location,
        },
    ];
};

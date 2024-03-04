import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {ListItem, UserData} from 'types';
import {Card} from '../components/Card';
import {Container} from '../components/GlobalComponents';
import {Header} from '../components/Header';
import {List} from '../components/List';
import useTeamData from '../components/hooks/useTeamData';

const mapMemberArray = (users: UserData[]) => {
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

const mapTeamLead = tlead => {
    const columns = [
        {
            key: 'Team Lead',
            value: '',
        },
        {
            key: 'Name',
            value: `${tlead.firstName} ${tlead.lastName}`,
        },
        {
            key: 'Display Name',
            value: tlead.displayName,
        },
        {
            key: 'Location',
            value: tlead.location,
        },
    ];
    return (
        <Card
            columns={columns}
            url={`/user/${tlead.id}`}
            navigationProps={tlead}
        />
    );
};

const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const {teamData, isLoading} = useTeamData(teamId);

    return (
        <Container>
            <Header title={`Team ${location.state.name}`} />
            {!isLoading && mapTeamLead(teamData?.teamLead)}
            <List items={mapMemberArray(teamData?.teamMembers ?? [])} isLoading={isLoading} />
        </Container>
    );
};

export default TeamOverview;

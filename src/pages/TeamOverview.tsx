import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Card} from '../components/Card';
import {Container} from '../components/GlobalComponents';
import {Header} from '../components/Header';
import {List} from '../components/List';
import useTeamData from '../components/hooks/useTeamData';
import {MapLeads, MapMembers} from '../helpers/columnGenerators';


const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const {teamData, isLoading} = useTeamData(teamId);

    return (
        <Container>
            <Header title={`Team ${location.state.name}`} />
            {!isLoading && (
                <Card
                    columns={MapLeads(teamData.teamLead)}
                    url={`/user/${teamData.teamLead.id}`}
                    navigationProps={teamData.teamLead}
                />
            )}
            <List items={MapMembers(teamData?.teamMembers ?? [])} isLoading={isLoading} />
        </Container>
    );
};

export default TeamOverview;

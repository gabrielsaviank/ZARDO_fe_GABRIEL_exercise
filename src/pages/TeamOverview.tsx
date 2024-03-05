import React, {useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Card} from '../components/Card';
import {Container} from '../components/GlobalComponents';
import {Header} from '../components/Header';
import {List} from '../components/List';
import useTeamData from '../components/hooks/useTeamData';
import {MapLeads, MapMembers} from '../helpers/columnGenerators';
import {UserData} from '../types';


const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const {teamData, isLoading} = useTeamData(teamId);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<UserData[]>([]);


    const filterItems = (value: string) => {
        const filteredTeamMembers = teamData.teamMembers.filter(member =>
            member.firstName.toLowerCase().includes(value.toLowerCase())
        );

        const filteredTeamLead = teamData.teamLead.firstName
            .toLowerCase()
            .includes(value.toLowerCase()) ? [teamData.teamLead] : [];

        const filteredName = [...filteredTeamLead, ...filteredTeamMembers];

        setFilteredItems(filteredName);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if(event.target.value === '') {
            setFilteredItems([]);
        }
    };

    const handleSubmit = () => {
        filterItems(inputValue);
    };

    return (
        <Container>
            <Header
                title={`Team ${location.state.name}`}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                hasFilters
            />
            {(!isLoading && filteredItems.length === 0) && (
                <Card
                    columns={MapLeads(teamData.teamLead)}
                    url={`/user/${teamData.teamLead.id}`}
                    navigationProps={teamData.teamLead}
                />
            )}
            <List
                items={
                    MapMembers(filteredItems.length > 0 ?
                    filteredItems :
                    teamData?.teamMembers ?? [])
                }
                isLoading={isLoading}
            />
        </Container>
    );
};

export default TeamOverview;

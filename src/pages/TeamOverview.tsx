import React, {useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Card} from '../components/Card';
import {Container} from '../components/GlobalComponents';
import {Header} from '../components/Header';
import {List} from '../components/List';
import useTeamData from '../hooks/useTeamData';
import {MapLeads, MapMembers} from '../helpers/columnGenerators';
import {UserData} from '../types';


const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const {teamData, isLoading} = useTeamData(teamId);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<UserData[]>([]);
    const [noMemberFound, setNoMemberFound] = useState<boolean>(false);

    const filterItems = (value: string) => {
        const filteredTeamMembers = teamData.teamMembers.filter(member =>
            member.firstName.toLowerCase().includes(value.toLowerCase())
        );

        const filteredTeamLead = teamData.teamLead.firstName
            .toLowerCase()
            .includes(value.toLowerCase()) ? [teamData.teamLead] : [];

        const filteredName = [...filteredTeamLead, ...filteredTeamMembers];

        if(filteredName.length === 0){
            setNoMemberFound(true);
            setFilteredItems([]);
        } else {
            setNoMemberFound(false);
            setFilteredItems(filteredName);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if(event.target.value === '') {
            setNoMemberFound(false);
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
            {noMemberFound ? (
                <h1>User Not found</h1>
            ) : (
                <React.Fragment>
                    {!isLoading && filteredItems.length === 0 && (
                        <Card
                            columns={MapLeads(teamData.teamLead)}
                            url={`/user/${teamData.teamLead.id}`}
                            navigationProps={teamData.teamLead}
                        />
                    )}
                    <List
                        items={MapMembers(
                            filteredItems.length > 0
                                ? filteredItems
                                : teamData?.teamMembers ?? []
                        )}
                        isLoading={isLoading}
                        type="member"
                    />
                </React.Fragment>
            )}
        </Container>
    );
};

export default TeamOverview;

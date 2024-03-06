import React, {useEffect, useState} from 'react';
import {getTeams as fetchTeams} from '../api';
import {Header} from '../components/Header';
import {List} from '../components/List';
import {Container} from '../components/GlobalComponents';
import {MapTeams} from '../helpers/columnGenerators';
import {TeamsType} from '../types';


const Teams = () => {
    const [teams, setTeams] = useState<TeamsType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<TeamsType[]>([]);
    const [noTeamFound, setNoTeamFound] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            try {
                const response = await fetchTeams();
                setTeams(response);
                setIsLoading(false);
            } catch (exception) {
                throw new Error('Error fetching teams', exception);
            }
        })();
    }, []);

    const filterItems = (value: string) => {
        const filteredTeams = teams.filter(team =>
            team.name.toLowerCase().includes(value.toLowerCase())
        );

        if(filteredItems.length === 0){
            setNoTeamFound(true);
            setFilteredItems([]);
        } else {
            setNoTeamFound(false);
            setFilteredItems(filteredTeams);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if(event.target.value === '') {
            setNoTeamFound(false);
            setFilteredItems([]);
        }
    };

    const handleSubmit = () => {
        filterItems(inputValue);
    };

    return (
        <Container>
            <Header
                title="Teams"
                showBackButton={false}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                hasFilters
            />
            {noTeamFound ? (
                <h1>Team Not found</h1>
            ) : (
                <List
                    items={MapTeams(
                        filteredItems.length > 0 ?
                            filteredItems : teams
                    )}
                    isLoading={isLoading}
                    type="team"
                />
            )}
        </Container>
    );
};

export default Teams;

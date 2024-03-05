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

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };

        getTeams();
    }, []);

    const filterItems = (value: string) => {
        const filteredTeams = teams.filter(team => team.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredItems(filteredTeams);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
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
            <List
                items={MapTeams(filteredItems.length > 0 ? filteredItems : teams)}
                isLoading={isLoading}
            />
        </Container>
    );
};

export default Teams;

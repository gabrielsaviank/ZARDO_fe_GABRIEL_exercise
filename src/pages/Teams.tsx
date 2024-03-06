import React, {useContext, useState} from 'react';
import {Header} from '../components/Header';
import {List} from '../components/List';
import {Container} from '../components/GlobalComponents';
import {MapTeams} from '../helpers/columnGenerators';
import {TeamsType} from '../types';
import TeamsContext from '../contexts/TeamsContext';
import {Pagination} from '../components/Pagination/Pagination';

const Teams = () => {
    const {teams, isLoading} = useContext(TeamsContext);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<TeamsType[]>([]);
    const [noTeamFound, setNoTeamFound] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 50;

    const filterItems = (value: string) => {
        const filteredTeams = teams.filter(team =>
            team.name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredTeams.length === 0) {
            setNoTeamFound(true);
            setFilteredItems([]);
        } else {
            setNoTeamFound(false);
            setFilteredItems(filteredTeams);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (event.target.value === '') {
            setNoTeamFound(false);
            setFilteredItems([]);
        }
    };

    const handleSubmit = () => {
        filterItems(inputValue);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

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
                        filteredItems.length > 0 ? currentItems : teams.slice(indexOfFirstItem, indexOfLastItem)
                    )}
                    isLoading={isLoading}
                    type="team"
                />
            )}
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={teams.length}
                onPageChange={handlePageChange}
            />
        </Container>
    );
};

export default Teams;

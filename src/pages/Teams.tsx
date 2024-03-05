import React, {useEffect, useState} from 'react';
import {getTeams as fetchTeams} from '../api';
import {Header} from '../components/Header';
import {List} from '../components/List';
import {Container} from '../components/GlobalComponents';
import {MapTeams} from '../helpers/columnGenerators';
import {TeamsType} from '../types';
import {Input} from '../components/Input/Index';


const Teams = () => {
    const [teams, setTeams] = useState<TeamsType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };

        getTeams();
    }, []);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
             <Input
                 onChange={() => {}}
                 label="ESTEAN"
                 value={null}
             />
            <List items={MapTeams(teams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;

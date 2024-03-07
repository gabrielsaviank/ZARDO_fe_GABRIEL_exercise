import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {TeamsContextType, TeamsType} from '../types';
import {getTeams as fetchTeams} from '../api';

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

interface TeamsProviderProps {
    children: ReactNode;
}

export const TeamsProvider: React.FC<TeamsProviderProps> = ({children}) => {
    const [teams, setTeams] = useState<TeamsType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTeamsData = async () => {
            try {
                const response = await fetchTeams();
                setTeams(response);
                setIsLoading(false);
            } catch (error) {
                throw new Error('Error fetching data');
            }
        };

        fetchTeamsData();
    }, []);

    return (
        <TeamsContext.Provider value={{teams, isLoading}}>
        {children}
        </TeamsContext.Provider>
    );
};

export default TeamsContext;

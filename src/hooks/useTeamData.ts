import {useEffect, useState} from 'react';
import {getTeamOverview, getUserData} from '../api';
import{UserData} from '../types';

export type PageState = {
    teamLead?: UserData;
    teamMembers?: UserData[];
}

const useTeamData = (teamId: string) => {
    const [teamData, setTeamData] = useState<PageState>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
                const teamLead = await getUserData(teamLeadId);
                const teamMembers = await Promise.all(
                    teamMemberIds.map(userId => getUserData(userId))
                );

                setTeamData({teamLead, teamMembers});
            } catch (error: unknown) {
                throw new Error('Error fetching data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [teamId]);

    return {teamData, isLoading};
};

export default useTeamData;

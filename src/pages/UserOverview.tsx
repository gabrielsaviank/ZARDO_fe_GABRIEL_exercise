import {useLocation} from 'react-router-dom';
import React, {useMemo} from 'react';
import {Card} from '../components/Card';
import {UserContainer} from '../components/GlobalComponents';
import {Header} from '../components/Header';
import {MapUser} from '../helpers/columnGenerators';
import {Pagination} from '../components/Pagination/Pagination';


const UserOverview = () => {
    const location = useLocation();
    const user = location.state;

    const renderUserDetails = useMemo(() => {
        const columns = MapUser(user);

        return (
            <Card
                columns={columns}
                hasNavigation={false}
                navigationProps={user}
            />
        );
    }, [user]);

    return (
        <UserContainer>
            <Header
                title={`User ${user.firstName} ${user.lastName}`}
            />
            {renderUserDetails}
            <Pagination
                currentPage={1}
                itemsPerPage={1}
                totalItems={0}
            />
        </UserContainer>
    );
};

export default UserOverview;

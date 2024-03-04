import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {UserData} from 'types';
import {useMemo} from 'react';
import {Card} from '../components/Card';
import {Container} from '../components/GlobalComponents';
import {Header} from '../components/Header';

const mapUserDataToColumns = (user: UserData) => {
    return [
        {
            key: 'Name',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            key: 'Display Name',
            value: user.displayName,
        },
        {
            key: 'Location',
            value: user.location,
        },
    ];
};

const UserOverview = () => {
    const location = useLocation();
    const user = location.state;

    const renderUserDetails = useMemo(() => {
        const columns = mapUserDataToColumns(user);

        return (
            <Card
                columns={columns}
                hasNavigation={false}
                navigationProps={user}
            />
        );
    }, [user]);

    return (
        <Container>
            <Header
                title={`User ${user.firstName} ${user.lastName}`}
            />
            {renderUserDetails}
        </Container>
    );
};

export default UserOverview;

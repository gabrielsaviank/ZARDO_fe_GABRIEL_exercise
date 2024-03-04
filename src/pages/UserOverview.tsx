import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {useMemo} from 'react';
import {Card} from '../components/Card';
import {Container} from '../components/GlobalComponents';
import {Header} from '../components/Header';
import {MapUser} from '../helpers/columnGenerators';


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
        <Container>
            <Header
                title={`User ${user.firstName} ${user.lastName}`}
            />
            {renderUserDetails}
        </Container>
    );
};

export default UserOverview;

import React, { useContext } from 'react';
import UserCard from '../UserCard';
import '../style/common.css';
import { StoreContext } from '../../StoreProvider';

const UsersList = () => {
    const { users } = useContext(StoreContext);

    return (
        <div className='userList-main-cmp' >
            <div className='userList-card-cmp'>
                {users.length > 0 ? (
                    users.map(user => <UserCard key={user.id} user={user} />)
                ) : (
                    <p>No users available. Click "Load Users" to fetch data.</p>
                )}
            </div>
        </div>
    );
}

export default UsersList;
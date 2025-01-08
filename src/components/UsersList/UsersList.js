import React, { useContext, useState } from 'react';
import UserCard from '../UserCard';
import '../style/common.css';
import { StoreContext } from '../../StoreProvider';
import Pagination from '@mui/material/Pagination';

const UsersList = () => {
    const { users } = useContext(StoreContext);

    const [page, setPage] = useState(1);
    const usersPerPage = 10;

    const handleChange = (event, value) => {
        setPage(value);
    };
    const startNumber = (page - 1) * usersPerPage;
    const endNumber = page * usersPerPage;
    return (
        <div className='userList-main-cmp' >
            <div className='userList-card-cmp'>
                {users.length > 0 ? (
                    users.slice(startNumber, endNumber).map(user => <UserCard key={user.id} user={user} />)
                ) : (
                    <p>No users available. Click "Load Users" to fetch data.</p>
                )}
            </div>
            {users.length === 0 ? null : (
                <Pagination
                    count={Math.ceil(users.length / usersPerPage)}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary" />
            )}

        </div>
    );
}

export default UsersList;
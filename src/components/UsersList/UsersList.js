import React, { useContext, useState } from 'react';
import UserCard from '../UserCard';
import '../style/common.css';
import { StoreContext } from '../../StoreProvider';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from "react-router-dom";

const UsersList = () => {
    const { users } = useContext(StoreContext);
    const [page, setPage] = useState(1);
    const usersPerPage = 10;

    const handleChange = (event, value) => {
        setPage(value);
    };
    const startNumber = (page - 1) * usersPerPage;
    const endNumber = page * usersPerPage;

    const navigate = useNavigate();
    const userNavigation = (userId) => {
        navigate(`/user/${userId}`);
    }

    return (
        <div className='userList-main-cmp' >
            <div className='userList-card-cmp'>
                {users.length > 0 ? (
                    users.slice(startNumber, endNumber).map(user =>
                        <div className='userList-user-card' onClick={() => userNavigation(user.id)}>
                            <UserCard key={user.id} user={user} />
                        </div>
                    )) : (
                    <p className="user-msg-tsx">No users available. Click "Load Users" to fetch data.</p>
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
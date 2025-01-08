import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersList from './UsersList/UsersList';
import UserProfile from './UserProfile/UserProfile';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<UsersList />}></Route>
                <Route path="/user/:userId" element={<UserProfile />}></Route>
            </Routes>
        </main>
    )
}

export default Main
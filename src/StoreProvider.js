import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [users, setUsers] = useState([]); // Global state for user data
    const [loading, setLoading] = useState(false); // Loading state

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();
            setUsers(data.users);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <StoreContext.Provider value={{ users, setUsers, loading, fetchUsers }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;

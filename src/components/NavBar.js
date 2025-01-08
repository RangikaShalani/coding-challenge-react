import React, { useContext } from 'react';
import styles from "./NavBar.module.css";
import { StoreContext } from '../StoreProvider';

const NavBar = () => {

    const { fetchUsers, loading } = useContext(StoreContext); // use context data

    return (
        <nav className={styles.navBar}>
            <h1>User Details</h1>
            <button
                className={styles.button}
                onClick={fetchUsers}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Load Users'}
            </button>
        </nav>
    );
}

export default NavBar
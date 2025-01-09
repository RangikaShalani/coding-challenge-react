import React, { useContext } from 'react';
import styles from "./NavBar.module.css";
import { StoreContext } from '../StoreProvider';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const { fetchUsers, loading } = useContext(StoreContext); // use context data

    const navigate = useNavigate();
    const MainNavigate = () => {
        navigate(`/`);
    }

    return (
        <nav className={styles.navBar}>
            <h1 onClick={MainNavigate} >User Details</h1>
            <button
                className={styles.button}
                onClick={fetchUsers}
                disabled={loading}>
                {loading ? 'Loading...' : 'Load Users'}
            </button>

        </nav>
    );
}

export default NavBar;
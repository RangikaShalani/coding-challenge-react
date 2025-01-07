import React from 'react'
import styles from "./NavBar.module.css"
import axios from 'axios'

const NavBar = () => {

    const handleUserDetails = async() =>{
        const resu = await axios.get('https://dummyjson.com/users');
        console.log(resu.data);
    }

    return (
        <nav className={styles.navBar}>
            <h1>User Details</h1>
            <button className={styles.button} onClick={handleUserDetails}>Load Users</button>
        </nav>
    )
}

export default NavBar
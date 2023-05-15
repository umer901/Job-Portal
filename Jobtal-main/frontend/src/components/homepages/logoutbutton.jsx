import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './navbar.module.css';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className={styles["button-1"]} onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton
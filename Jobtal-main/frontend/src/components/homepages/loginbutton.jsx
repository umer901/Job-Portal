import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import styles from './home1.module.css';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        (
            <button className={styles["button-1"]} onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton
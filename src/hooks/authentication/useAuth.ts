import { useState } from 'react';
import authenticationAPI from '../../services/authentication/authenticationAPI';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorAuth, setErrorAuth] = useState<string | null>(null);
    const [responseRegister, setResponseRegister] = useState(null);
    const [loadingResponseRegister, setLoadingResponseRegister] = useState(false);

    const login = async (username: string, password: string) => {
        try {
            const userData = await authenticationAPI.login(username, password);
            setUser(userData);
            setErrorAuth(null);
            return userData;
        } catch (err: any) {
            const errorMessage =
                err?.response?.data?.message ||
                err?.message ||
                err.toString();
            setErrorAuth(errorMessage);
        }
    };

    const createUser = async (user: any) => {
        setLoadingResponseRegister(true);
        try {
            const response = await authenticationAPI.registerUser(user);
            setResponseRegister(response);
            setLoadingResponseRegister(false);
        } catch (error: any) {
            const errorMessage =
                error?.response?.data?.message ||
                error?.message ||
                error.toString();
            setErrorAuth(errorMessage);
            setLoadingResponseRegister(false);
        }
    };

    return {
        user,
        errorAuth,
        login,
        createUser,
        responseRegister,
        loadingResponseRegister
    };
};

export default useAuth;

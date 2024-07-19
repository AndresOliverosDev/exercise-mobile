import axios from 'axios';
import apiClient from '../apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL_API_BASE } from '../URL_API_BASE';

const API_URL = `${URL_API_BASE}/auth`;

const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        const { jwt } = response.data;

        if (jwt !== null) {
            await AsyncStorage.setItem('jwt', `Bearer ${jwt}`);
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

const registerUser = async (user: any) => {
    try {
        console.log('Payload enviado:', JSON.stringify(user, null, 2));
        const response = await apiClient.post(`${API_URL}/register`, user, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const logout = async () => {
    await AsyncStorage.removeItem('jwt');
};

export default {
    login,
    logout,
    registerUser
};

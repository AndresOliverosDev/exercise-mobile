import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiClient = axios.create({
    baseURL: 'http://localhost:8181',
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('jwt');
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;

import axios from 'axios';
import { apiConfig } from '../config';

const camerasApiService = {
    getCameras: async () => {
        try {
            const response = await axios.get(`${apiConfig.baseUrl}/camera`);
            return response?.data ?? [];
        } catch (error) {
            console.error("Error fetching cameras:", error);
            throw error;
        }
    }
};

export default camerasApiService;

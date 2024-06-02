import axios from 'axios';
import { apiConfig } from '../config';

const eventsApiService = {
    getEvents: async () => {
        try {
            const response = await axios.get(`${apiConfig.baseUrl}/events`);
            return response?.data?.scanResults ?? [];
        } catch (error) {
            console.error("Error fetching events:", error);
            throw error;
        }
    }
};

export default eventsApiService;

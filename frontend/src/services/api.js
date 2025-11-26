import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/apod',
});

export const getTodayApod = async () => {
    const response = await api.get('/today');
    return response.data;
};

export const getApodByDate = async (date) => {
    const response = await api.get(`/date/${date}`);
    return response.data;
};

export const getApodRange = async (startDate, endDate) => {
    const response = await api.get('/range', {
        params: { start_date: startDate, end_date: endDate }
    });
    return response.data;
};

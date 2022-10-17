import axios from 'axios';

const getTop = async (state: string) => {
    try {
        const defaultPath = 'https://api.themoviedb.org/3/movie';
        const API_KEY = 'e25253996293548e3c460ece1353df35';
        const language = 'ru'
        const result = await axios.get(`${ defaultPath }/popular?api_key=${API_KEY}&language=${language}&page=1&region=${language}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch games in state ${state}`, err);
        throw err;
    }
};

export default {
    getTop,
};


import axios from 'axios';

const defaultPath = 'https://api.themoviedb.org/3';
const API_KEY = 'e25253996293548e3c460ece1353df35';
const language = '';

const getMoviesInfo = async (type: string) => {
    try {
        const result = await axios.get(`${defaultPath}/movie/${type}?api_key=${API_KEY}&language=${language}&page=1&region=${language}`);
        return result.data.results;
    } catch (err) {
        console.error(`Failed to fetch ${type}`, err);
        throw err;
    }
};

const getSerialsInfo = async (type: string) => {
    try {
        const result = await axios.get(`${defaultPath}/tv/${type}?api_key=${API_KEY}&language=${language}&page=1`);
        return result.data.results;
    } catch (err) {
        console.error(`Failed to fetch ${type}`, err);
        throw err;
    }
};

const getBestActor = async () => {
    const type = 'person/popular';
    try {
        const result = await axios.get(`${defaultPath}/${type}?api_key=${API_KEY}&language=${language}&page=1`);
        return result.data.results;
    } catch (err) {
        console.error(`Failed to fetch ${type}`, err);
        throw err;
    }
};

export default {
    getMoviesInfo,
    getSerialsInfo,
    getBestActor
};

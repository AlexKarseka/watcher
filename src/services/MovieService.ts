import axios from 'axios';

const defaultPath = 'https://api.themoviedb.org/3';
const API_KEY = 'e25253996293548e3c460ece1353df35';
const language = '';

const getTopMovies = async (grading: string, page: string) => {
    try {
        const url = 'movie';
        const result = await axios.get(`${defaultPath}/${url}/${grading}?api_key=${API_KEY}&language=${language}&page=${page}&region=${language}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch movies ${grading}`, err);
        throw err;
    }
};
const getTopSerials = async (grading: string, page: string) => {
    try {
        const url = 'tv';
        const result = await axios.get(`${defaultPath}/${url}/${grading}?api_key=${API_KEY}&language=${language}&page=${page}&region=${language}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch tv serials ${grading}`, err);
        throw err;
    }
};

const getGenres = async () => {
    try {
        const url = 'genre/movie/list';
        const result = await axios.get(`${ defaultPath }/${url}?api_key=${API_KEY}&language=${language}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch genres`, err);
        throw err;
    }
};

export default {
    getTopMovies,
    getTopSerials,
    getGenres,
};


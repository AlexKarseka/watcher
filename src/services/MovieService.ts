import axios from 'axios';

const defaultPath = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const language = '';

const getTop = async (grading: string, type: string, page: number) => {
    try {
        const result = await axios.get(`${defaultPath}/${type}/${grading}?api_key=${API_KEY}&language=${language}&page=${page}&region=${language}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch movies ${grading}`, err);
        throw err;
    }
};

const getGenres = async (type: string) => {
    try {
        const result = await axios.get(`${ defaultPath }/genre/${type}/list?api_key=${API_KEY}&language=${language}`);
        return result.data.genres;
    } catch (err) {
        console.error(`Failed to fetch genres`, err);
        throw err;
    }
};

const getGenresList = async (type: string, genres: any, page: number) => {
    try {
        const result = await axios.get(`${defaultPath}/discover/${type}/?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&page=${page}&with_genres=${genres}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch discover for id ${type}`, err);
        throw err;
    }
}

export default {
    getTop,
    getGenres,
    getGenresList
};


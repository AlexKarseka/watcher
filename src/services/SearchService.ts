import axios from 'axios';

const defaultPath = 'https://api.themoviedb.org/3/search';
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const language = '';

const getSearchMovies = async (search: string, type: string) => {
    try {
        const include_adult = 'false'
        const result = await axios.get(`${defaultPath}/${type}?api_key=${API_KEY}&language=${language}&query=${search}&page=1-100&include_adult=${include_adult}&region=${language}`);
        return result.data.results;
    } catch (err) {
        console.error(`Failed to fetch search with a request ${search}`, err);
        throw err;
    }
};

export default {
    getSearchMovies,
};

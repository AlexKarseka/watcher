import axios from "axios";

const defaultPath = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const language = '';

const getDetails = async (movie_id: string | undefined | number, type: string) => {
    try {
        const append = 'images'
        const result = await axios.get(`${defaultPath}/${type}/${movie_id}?api_key=${API_KEY}&language=${language}&append_to_response=${append}`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch details for id ${movie_id}`, err);
        throw err;
    }
};

const getRecommendations = async (movie_id: string | undefined, type: string) => {
    try {
        const result = await axios.get(`${defaultPath}/${type}/${movie_id}/recommendations?api_key=${API_KEY}&language=${language}`);
        return result.data.results;
    } catch (err) {
        console.error(`Failed to fetch recommendations for id ${movie_id}`, err);
        throw err;
    }
};

const getPersonCast = async (person_id: string | undefined) => {
    try {
        const result = await axios.get(`${defaultPath}/person/${person_id}/movie_credits?api_key=${API_KEY}&language=en-US`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch person for id ${person_id}`, err);
        throw err;
    }
};

export default {
    getDetails,
    getRecommendations,
    getPersonCast,
}
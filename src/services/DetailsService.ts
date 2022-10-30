import axios from "axios";

const defaultPath = 'https://api.themoviedb.org/3';
const API_KEY = 'e25253996293548e3c460ece1353df35';
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

const getTaggedImages = async (movie_id: string | undefined) => {
    try {
        const result = await axios.get(`${defaultPath}/person/${movie_id}/tagged_images?api_key=${API_KEY}&language=${language}&page=1`);
        return result.data;
    } catch (err) {
        console.error(`Failed to fetch recommendations for id ${movie_id}`, err);
        throw err;
    }
};

export default {
    getDetails,
    getRecommendations,
    getTaggedImages,
}
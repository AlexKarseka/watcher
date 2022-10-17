export interface IGenresList {
    id: string,
    name: string,
}

export interface ITopMovies {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IForTestTop {
    id: number,
    image: string,
    nameFilm: string
}

export interface IForTestTopSearch {
    id: number,
    nameFilm: string
}

export interface IForTestList {
    id: number,
    year: number,
    image: string,
    nameFilm: string,
    rating: number,
    limits: string,
    genres: string,
    description: string,
}

export interface IForTestListMovie {
    id: number,
    year: number,
    image: string,
    nameFilm: string,
    rating: number,
    limits: string,
    genres: string,
    description: string,
    type: string,
    country: string,
    studios: string,
    budget: number,
    fees: number,
    duration: number,
}
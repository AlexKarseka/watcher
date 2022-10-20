export interface IGenresList {
    id: number,
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
    name: string,
    first_air_date: string,
}

export interface ILogoNameList {
    aspect_ratio: number,
    file_path: string,
    height: number,
    iso_639_1: string,
    vote_average: number,
    vote_count: number,
    width: number,
}

export interface ICountriesName {
    iso_3166_1: string,
    name: string,
}

export interface IGenresName {
    id: number,
    name: string,
}

export interface IProduction {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
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
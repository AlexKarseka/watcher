export interface IFroTest {
    image: string,
    altNumber: string,
    nameFilm: string
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
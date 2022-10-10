import React from "react";
import {IForTestList} from "../models";

interface SecondCardVersionProps {
    content: Array<IForTestList>
}

const SecondCardVersion = ({content}: SecondCardVersionProps) => {
    return (
        <div className="grid grid-cols-4 gap-6 px-14">
            {content.map((movie) => {
                return (
                    <div key={movie.id}>
                        <img src={movie.image} alt="image"/>
                        <div>{movie.nameFilm}</div>
                        <div>{movie.year}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default SecondCardVersion;
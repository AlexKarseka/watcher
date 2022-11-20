import React from "react";
import css from "./styles.module.css";
import {Link, useNavigate} from "react-router-dom";

import useAuth from "../../../hooks/store/useAuth";
import {useAppDispatch} from "../../../hooks/store/useReduxHooks";

import Close from "../assets/Close.svg";
import {removeUser} from "../../../store/slices/userSlice";


interface MenuMobiProps {
    isOpen: boolean,
    onClose: () => void
}

const MenuMobi = ({isOpen, onClose}: MenuMobiProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {isAuth, email} = useAuth();

    return (
        <div
            className={`modal ${css.modal_background} ${isOpen ? 'modal-open' : ''}`}
            onClick={onClose}
        >
            <div
                className="modal-box max-w-xs h-full bg-[#111113] opacity-90 ml-auto mb-auto rounded-r-none"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex justify-between">
                    <div
                        className="uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-sm sm:text-2xl font-bold opacity-80 drop-shadow-[0_4px_3px_black] hover:opacity-100"
                        onClick={onClose}
                    >
                        <Link to="/">Watcher</Link>
                    </div>

                    <button type="button" onClick={onClose}>
                        <img src={Close} alt="Close" className="w-6 h-6"/>
                    </button>
                </div>

                {isAuth ?
                    <div className="flex flex-col mt-12">
                        <Link
                            className="inline-flex items-center justify-center rounded-md px-3 h-8 bg-[#feba2b] border border-[#feba2b] text-[#111113] text-base opacity-80 mb-4"
                            to="/favourite"
                            onClick={onClose}
                        >
                            Favourite
                        </Link>

                        <button
                            className="inline-flex items-center justify-center rounded-md px-3 h-8 bg-[#565c67] border border-[#565c67] text-white text-base opacity-80"
                            onClick={() => {
                                dispatch(removeUser());
                                navigate('/');
                            }}
                        >
                            Exit for {email}
                        </button>
                    </div>
                    :
                    <div className="flex flex-col mt-12">
                        <Link
                            className="inline-flex items-center justify-center rounded-md px-3 h-8 bg-[#565c67] border border-[#565c67] text-white text-base opacity-80 mb-4"
                            to="/signin"
                            onClick={onClose}
                        >
                            Log in
                        </Link>

                        <Link
                            className="inline-flex items-center justify-center rounded-md px-3 h-8 bg-[#feba2b] border border-[#feba2b] text-[#111113] text-base opacity-80"
                            to="/signup"
                            onClick={onClose}
                        >
                            Sign up
                        </Link>
                    </div>
                }

                <ul className="flex flex-col items-start justify-center mt-14">
                    <li
                        className="mb-3 text-white text-lg opacity-80 drop-shadow-[0_4px_3px_black]"
                        onClick={onClose}
                    >
                        <Link to="/movies">Select Movie</Link>
                    </li>
                    <li
                        className="mb-3 text-white text-lg opacity-80 drop-shadow-[0_4px_3px_black]"
                        onClick={onClose}
                    >
                        <Link to="/serials">Select Serials</Link>
                    </li>
                    <li
                        className="text-white text-lg opacity-80 drop-shadow-[0_4px_3px_black]"
                        onClick={onClose}
                    >
                        <Link to="/search">Search Films</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuMobi;

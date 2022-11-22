import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/store/useReduxHooks";
import useAuth from "../../../hooks/store/useAuth";
import { removeUser } from "../../../store/slices/userSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {isAuth, email} = useAuth();

    return (
        <div className="relative z-20 flex items-center justify-between w-full h-20 px-3 sm:px-10 md:px-20">
            <ul className="flex items-center justify-center">
                <li
                    className="uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-2xl font-bold opacity-80 drop-shadow-[0_4px_3px_black] hover:opacity-100"
                >
                    <Link to="/">Watcher</Link>
                </li>
                <li className="mr-5 text-white text-base opacity-80 drop-shadow-[0_4px_3px_black] hover:opacity-100">
                    <Link to="/movies">Movies</Link>
                </li>
                <li className="mr-5 text-white text-base opacity-80 drop-shadow-[0_4px_3px_black] hover:opacity-100">
                    <Link to="/serials">Serials</Link>
                </li>
                <li className="text-white text-base opacity-80 drop-shadow-[0_4px_3px_black] hover:opacity-100">
                    <Link to="/search">Search</Link>
                </li>
            </ul>

            {isAuth ?
                <div className="flex gap-3">
                    <Link
                        className="inline-flex items-center justify-center rounded-lg px-3 h-8 bg-[#feba2b] border border-[#feba2b] text-[#111113] text-sm opacity-80 hover:opacity-100"
                        to="/favourite">
                        Favourite
                    </Link>

                    <button
                        className="inline-flex items-center justify-center rounded-lg px-3 h-8 bg-[#565c67] border border-[#565c67] text-white text-sm opacity-80 hover:opacity-100"
                        onClick={() => {
                            dispatch(removeUser());
                            navigate('/');
                        }}
                    >
                        Exit for {email}
                    </button>
                </div>
                :
                <div className="flex gap-3">
                    <Link
                        className="inline-flex items-center justify-center rounded-lg px-3 h-8 bg-[#565c67] border border-[#565c67] text-white text-sm opacity-80 hover:opacity-100"
                        to="/signin"
                    >
                        Log in
                    </Link>
                    
                    <Link
                        className="inline-flex items-center justify-center rounded-lg px-3 h-8 bg-[#feba2b] border border-[#feba2b] text-[#111113] text-sm opacity-80 hover:opacity-100"
                        to="/signup">
                        Sign up
                    </Link>
                </div>
            }
        </div>
    );
};

export default Header;

import React from "react";
import css from "./styles.module.css";
import {Link} from "react-router-dom";

import Close from "../assets/Close.svg";

interface ErrorModalProps {
    isOpen: boolean,
    onClose: () => void
}

const ErrorModal = ({isOpen, onClose}: ErrorModalProps) => {

    return (
        <div
            className={`modal ${css.modal_background} ${isOpen ? 'modal-open' : ''}`}
            onClick={onClose}
        >
            <div
                className="modal-box bg-[#111113] mx-auto"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex justify-end mb-5">
                    <button type="button" onClick={onClose}>
                        <img src={Close} alt="Close" className="w-5 h-5"/>
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center text-white">
                        <div className="text-lg sm:text-2xl mb-6 text-center">
                            Wrong login or password!
                        </div>
                        <div className="text-sm sm:text-xl text-center">
                            Dear user! Login or password is incorrect.
                            Check that your username and password are correct and try again.
                        </div>
                    </div>

                    <div className="flex justify-center items-center text-sm text-white mt-10">
                        <div>Don't have an account?</div>
                        <Link className="ml-1.5 text-[#feba2b]" to="/signup">Sign up!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;

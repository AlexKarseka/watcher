import React from "react";
import css from "./styles.module.css";

import Close from "../assets/Close.svg";

interface MenuMobiProps {
    isOpen: boolean,
    onClose: () => void
}

const MenuMobi = ({isOpen, onClose}: MenuMobiProps) => {
    return (
        <div
            className={`modal ${css.modal_background} ${isOpen ? 'modal-open' : ''}`}
            onClick={onClose}
        >
            <div
                className="modal-box max-w-xs h-full bg-minsk p-8 ml-auto mb-auto rounded-l-3xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <button type="button" onClick={onClose}>
                        <img src={Close} alt="Close" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuMobi;

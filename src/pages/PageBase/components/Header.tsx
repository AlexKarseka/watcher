import React from "react";
import css from "./styles.module.css";

const Header = () => {
    return (
        <div className={css.header}>
            <ul className={css.header_list}>
                <li className={css.header_logo}>Watcher</li>
                <li>Фильмы</li>
                <li>Сериалы</li>
                <li>Поиск</li>
            </ul>
            <div className={css.header_buttons}>
                <div>
                    Войти
                </div>
                <div>
                    Регистрация
                </div>
            </div>
        </div>
    );
};

export default Header;

import React from "react";
import css from "./styles.module.css";

const Header = () => {
    return (
        <div className={css.header}>
            <ul className={css.header_list}>
                <li className={css.header_logo}>
                    <a href="/">Watcher</a>
                </li>
                <li className={css.header_list_item}>
                    <a href="/movies">Фильмы</a>
                </li>
                <li className={css.header_list_item}>
                    <a href="/serials">Сериалы</a>
                </li>
                <li className={css.header_list_item}>
                    <a href="/search">Поиск</a>
                </li>
            </ul>
            <div className={css.header_buttons}>
                <a className={css.header_buttons_signin} href="/signin">
                    Войти
                </a>
                <a className={css.header_buttons_signup} href="/signup">
                    Зарегистрироваться
                </a>
            </div>
        </div>
    );
};

export default Header;

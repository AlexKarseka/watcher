import React from "react";
import css from "./styles.module.css";

const Header = () => {
    return (
        <div className={css.header}>
            <ul className={css.menu_list}>
                <li className={css.logo}>
                    <a href="/">Watcher</a>
                </li>
                <li className={css.menu_list_item}>
                    <a href="/movies">Movies</a>
                </li>
                <li className={css.menu_list_item}>
                    <a href="/serials">Serials</a>
                </li>
                <li className={css.menu_list_item}>
                    <a href="/search">Search</a>
                </li>
            </ul>
            <div className={css.header_buttons}>
                <a className={css.header_buttons_signin} href="/signin">
                   Log in
                </a>
                <a className={css.header_buttons_signup} href="/signup">
                    Sign up
                </a>
            </div>
        </div>
    );
};

export default Header;

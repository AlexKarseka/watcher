import React from "react";
import css from './styles.module.css';

import GitLogo from '../assets/gitHub.png';
import API from '../assets/API.svg';

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.logo}>
                <a href="/">Watcher</a>
            </div>
            <div>
                <ul className={css.menu_list}>
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
                <ul className={css.footer_dev_list}>
                    <li className={css.dev_list_item}>
                        <a href="https://github.com/AlexKarseka/watcher">
                            <img src={GitLogo} alt="gitLogo" height={30} width={80} />
                        </a>
                    </li>
                    <li className={css.dev_list_item}>
                        <a href="https://developers.themoviedb.org/3/getting-started/introduction">
                            <img src={API} alt="APILogo" height={30} width={80} />
                        </a>
                    </li>
                </ul>
                <div className={css.description_text}>
                    © 2022 Watcher, All rights reserved. Watcher® and all related service marks are the property of Alex Karseka.
                </div>
            </div>
            <div className={css.support}>
                <div className={css.support_text}>
                    Support
                </div>
                <div className={css.support_address}>
                    alexkarseko@gmail.com
                </div>
            </div>
        </div>
    );
};

export default Footer;

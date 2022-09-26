import React from "react";
import css from './styles.module.css';

const Footer = () => {
    return (
        <div className={css.footer}>
            <div>Watcher</div>
            <div>
                <ul className={css.footer_first_list}>
                    <li>Фильмы</li>
                    <li>Сериалы</li>
                    <li>Поиск</li>
                </ul>
                <ul className={css.footer_second_list}>
                    <li>Git</li>
                    <li>API</li>
                </ul>
            </div>
            <div>
                Поддержка
            </div>
        </div>
    );
};

export default Footer;

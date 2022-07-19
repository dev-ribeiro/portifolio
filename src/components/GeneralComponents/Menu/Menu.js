import { useState } from "react";
import style from "./Menu.module.css";

export default function Menu() {

    const [show, setShow] = useState(false);

    return (
        <aside
            className={show == true ? `${style.menu} ${style.selected}` : `${style.menu}`}
            onClick={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <img src="/assets/icons/home/menu_open.png" />
            <div className={style.handleShowMenu}>
                <div className={style.contact}>
                    <h3>Contato:</h3>
                    <a href="/" target="blank"><img src="/assets/icons/contact/github.png"></img></a>
                    <a href="/" target="blank"><img src="/assets/icons/contact/linkedin.png"></img></a>
                </div>
            </div>
        </aside>
    )

}
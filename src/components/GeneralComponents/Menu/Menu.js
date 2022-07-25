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
            <img className={style.click_img} src="/assets/icons/home/menu_open.png" />
            <div className={style.handle_show_menu}>
                <div className={style.contact}>
                    <h3>Contato:</h3>
                    <div>
                        <img src="/assets/icons/contact/github.png"></img>
                        <a href="/" target="blank">GitHub</a>
                    </div>
                    <div>
                        <img src="/assets/icons/contact/linkedin.png"></img>
                        <a href="/" target="blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </aside>
    )

}
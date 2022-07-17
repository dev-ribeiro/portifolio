import { useState } from "react";
import style from "./Menu.module.css";

export default function Menu() {

    const [show, setShow] = useState(false);

    let menuImage;
    if (show == true) {
        menuImage = <img src="/assets/icons/home/menu_open.png"></img>
    } else {
        menuImage = <img src="/assets/icons/home/menu_initial.png"></img>
    }

    return (
        <aside
            className={show == true ? `${style.menu} ${style.selected}` : `${style.menu}`}
            onClick={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {menuImage}
        </aside>
    )

}
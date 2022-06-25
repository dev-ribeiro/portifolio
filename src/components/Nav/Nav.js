import style from "./Nav.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Nav(props) {

    const [show, setShow] = useState(false);

    return (
        <nav
            onClick={() => { setShow(true) }}
            onMouseLeave={() => { setShow(false) }}
            className={show == false ? `${style.navigation} ${style.initialNav}` : `${style.navigation} ${style.showNav}`}
        >
            <Link href="/"><a className={style.linkName}>Home</a></Link>
            <Link href="/projects"><a className={style.linkName}>Projetos</a></Link>
            <Link href="/about"><a className={style.linkName}>Sobre</a></Link>
        </nav>
    )
}
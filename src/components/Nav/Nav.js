import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav(props) {

    return (
        <nav className={style.navigation}>
            <Link href="/">
                <a className={`${style.linkName} ${style.homeItem}`}>Home</a>
            </Link>
            <Link href="/projects">
                <a className={`${style.linkName} ${style.projectsItem}`}>Projetos</a>
            </Link>
            <Link href="/about">
                <a className={`${style.linkName} ${style.aboutItem}`}>Sobre</a>
            </Link>
        </nav>
    )
}
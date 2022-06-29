import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav(props) {

    return (
        <nav className={style.navigation}>
            <Link href="/"><a className={style.linkName}>Home</a></Link>
            <Link href="/projects"><a className={style.linkName}>Projetos</a></Link>
            <Link href="/about"><a className={style.linkName}>Sobre</a></Link>
        </nav>
    )
}
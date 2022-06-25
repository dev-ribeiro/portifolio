import style from "./Header.module.css";
import Nav from "../Nav/Nav";

export default function Header(props) {
    return (
        <header className={style.mainHeader}>
            <h1 className={style.logo}>
                <span className={style.nameDev}>DEV</span><br />
                <span className={style.secondName}>Ribeiro</span>
            </h1>
            <Nav />
        </header>
    )
}
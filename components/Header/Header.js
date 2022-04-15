import Link from "next/link";
import style from "../../styles/Header/Header.module.css"

function Header(){
    return(
        <div className={style.container}>
            <h1>David<br/>Ribeiro</h1>
            <nav className={style.navigation}>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/projects'>
                    <a>Projetos</a>
                </Link>
                <Link href='/contact'>
                    <a>Contato</a>
                </Link>
            </nav>
        </div>
    )
}

export default Header
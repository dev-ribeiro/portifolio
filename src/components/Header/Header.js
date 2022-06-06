import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <h1>DAVID<br/>RIBEIRO</h1>
            <nav>
                <a>Início</a>
                <a>Projetos</a>
                <a>Contato</a>
            </nav>
        </header>
    )
}
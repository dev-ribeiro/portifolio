import style from "../../../styles/Header.module.css";


function Navigation() {
    return (
        <nav className={style.navigation}>
            <div>
                <span class="material-symbols-outlined">
                    home
                </span>
                <a href="/">Home</a>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    work_history
                </span>
                <a href="/projects">Projetos</a>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    contact_page
                </span>
                <a href="/contact">Contato</a>
            </div>
        </nav>
    )
};

export default Navigation
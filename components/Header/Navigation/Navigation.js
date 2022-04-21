import style from "../../../styles/Header.module.css";


function Navigation() {
    return (
        <nav className={style.navigation}>
            <div>
                <span className="material-symbols-outlined">
                    home
                </span>
                <a href="/">Home</a>
            </div>
            <div>
                <span className="material-symbols-outlined">
                    work_history
                </span>
                <a href="/projects">Projetos</a>
            </div>
            <div>
                <span className="material-symbols-outlined">
                    rss_feed
                </span>
                <a href="/blog">Blog</a>
            </div>
        </nav>
    )
};

export default Navigation
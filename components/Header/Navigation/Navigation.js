import style from "../../../styles/Header.module.css";
// import Image from "next/image";
// import imgHome from "../../../public/images/icons/home.png";
// import imgProject from "../../../public/images/icons/work.png";
// import imgContact from "../../../public/images/icons/contact.png";

function Navigation() {
    return (
        <nav className={style.navigation}>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/projects">Projetos</a>
            </div>
            <div>
                <a href="/contact">Contato</a>
            </div>
        </nav>
    )
};

export default Navigation
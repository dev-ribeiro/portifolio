import style from "../../../styles/Header.module.css";
import Image from "next/image";
import imgHome from "../../../public/images/icons/home.png";
import imgProject from "../../../public/images/icons/work.png";
import imgContact from "../../../public/images/icons/contact.png";

function Navigation() {
    return (
        <nav className={style.navigation}>
            <div>
                <Image
                    src={imgHome}
                    width={25}
                    height={25}
                />
                <a href="/">Home</a>
            </div>
            <div>
                <Image
                    src={imgProject}
                    width={25}
                    height={25}
                />
                <a href="/projects">Projetos</a>
            </div>
            <div>
                <Image
                    src={imgContact}
                    width={25}
                    height={25}
                />
                <a href="/contact">Contato</a>
            </div>
        </nav>
    )
}

export default Navigation
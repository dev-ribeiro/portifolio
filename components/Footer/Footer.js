import Image from "next/image";
import style from "../../styles/Footer.module.css";
import githubLogo from "../../public/images/github.png";
import linkedinLogo from "../../public/images/linkedin.png";

function Footer(){
    return(
        <footer className={style.footer}>
            <Image
                src={githubLogo}
                width={100}
                height={100}
            ></Image>
            <Image
                src={linkedinLogo}
                width={100}
                height={100}
            ></Image>
        </footer>
    )
}

export default Footer
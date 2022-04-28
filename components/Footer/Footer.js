import Image from "next/image";
import style from "../../styles/Footer.module.css";
// import github from "../../public/images/github.png";
// import linkedin from "../../public/images/linkedin.png";

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.links}>
                <h3>Contatos:</h3>
                <div>
                    <Image
                        src="/images/github.png"
                        width={20}
                        height={20}
                    />
                    <h4><a href="https://github.com/dev-ribeiro">GitHub</a></h4>
                </div>
                <div>
                    <Image
                        src="/images/linkedin.png"
                        width={20}
                        height={20}
                    />
                    <h4><a href="https://www.linkedin.com/in/david-ribeiro-21297322b/">LinkedIn</a></h4>
                </div>

            </div>
        </footer>
    )
}

export default Footer
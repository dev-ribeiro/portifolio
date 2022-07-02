import Link from "next/link";
import style from "./Footer.module.css";

export default function Footer(props) {
    return (
        <footer className={style.footer}>
            <section className={style.contact}>
                <h3>Contato:</h3>
                <div>
                    <img src="/assets/icons/footer/linkedin.png"></img>
                    <Link href="https://www.linkedin.com/in/david-ribeiro-21297322b"><a>LinkedIn</a></Link>
                </div>
                <div>
                    <img src="/assets/icons/footer/github.png"></img>
                    <Link href="https://github.com/dev-ribeiro"><a>GitHub</a></Link>
                </div>
            </section>
        </footer>
    )
}
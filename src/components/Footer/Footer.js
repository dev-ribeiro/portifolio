import style from "./Footer.module.css";

export default function Footer(props){
    return(
        <footer className={style.footer}>
            <section className={style.contact}>
                <h3>Contato:</h3>
                <ul>
                    <li>E-mail</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </section>
        </footer>
    )
}
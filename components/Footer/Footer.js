import style from "../../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.links}>
                <h3>Contatos:</h3>
                <div>
                    <img src="/assets/github.jpg"></img>
                    <h4><a href="https://github.com/dev-ribeiro">GitHub</a></h4>
                </div>
                <div>
                    <img src="/assets/linkedin.jpg"></img>
                    <h4><a href="https://www.linkedin.com/in/david-ribeiro-21297322b/">LinkedIn</a></h4>
                </div>

            </div>
        </footer>
    )
}

export default Footer
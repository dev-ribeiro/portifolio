import style from "../../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.links}>
                <h3>Contatos:</h3>
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                    ></img>
                    <h4><a href="https://github.com/dev-ribeiro">GitHub</a></h4>
                </div>
                <div>
                    <img
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                    ></img>
                    <h4><a href="https://www.linkedin.com/in/david-ribeiro-21297322b/">LinkedIn</a></h4>
                </div>

            </div>
        </footer>
    )
}

export default Footer
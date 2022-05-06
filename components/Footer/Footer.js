import style from "../../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={style.footer}>

            {/* <div className={style.links}>
                <h3>Contatos:</h3>
                <div>
                    <img src="/assets/github.jpg"></img>
                    <h4><a href="https://github.com/dev-ribeiro">GitHub</a></h4>
                </div>
                <div>
                    <img src="/assets/linkedin.jpg"></img>
                    <h4><a href="https://www.linkedin.com/in/david-ribeiro-21297322b/">LinkedIn</a></h4>
                </div>

            </div> */}
            <h3>Main stacks:</h3>
            <div className={style.icons}>
                <a href="https://www.flaticon.com/free-icons/html" title="html icons">
                    <img src="/assets/html.png"></img>
                </a>
                <a href="https://www.flaticon.com/free-icons/css" title="css icons">
                    <img src="/assets/css.png"></img>
                </a>
                <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">
                    <img src="/assets/js.png"></img>
                </a>
                <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">
                    <img src="/assets/nodejs.png"></img>
                </a>
                <a href="https://www.flaticon.com/free-icons/react" title="react icons">
                    <img src="/assets/react.png"></img>
                </a>
            </div>
            <hr></hr>

        </footer>
    )
}

export default Footer
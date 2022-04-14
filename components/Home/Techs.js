import style from "../../styles/Home.module.css";

function Techs() {
    return (
        <div className={style.techs}>
            <div className={style.card}>
                <div>
                    <img src="/images/react-icon.png"></img>
                </div>
                <div>
                    <h2>React</h2>
                    <p>Biblioteca que estou focando no momento para criação de sites. Inclusive o site do portifólio é feito com React, usando o framework Next.js.</p>
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="/images/node.png"></img>
                </div>
                <div>
                    <h2>Node</h2>
                    <p>Utilizo o Node.JS no backend, aliado com o banco de dados do MongoDB, e possuo uma API no GitHub que utiliza o framework Express.JS.</p>
                </div>

            </div>
        </div>
    )
}

export default Techs
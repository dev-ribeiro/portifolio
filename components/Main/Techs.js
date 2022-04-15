import style from "../../styles/Main/Tech.module.css"

function Techs() {
    return (
        <div className={style.containerTechs}>
            <h2>Tecnologias:</h2>
            <div className={style.techs}>
                <img src="/images/Home/html.png"></img>
                <img src="/images/Home/css.png"></img>
                <img src="/images/Home/javascript.png"></img>
                <img src="/images/Home/mongo.svg"></img>
                <img src="/images/Home/react.png"></img>
                <img src="/images/Home/node.png"></img>
            </div>
        </div>
    )
}

export default Techs
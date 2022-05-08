import style from "../../../styles/Main/ProjectPage.module.css";

function Projects(){
    return(
        <main className={style.list}>
            <div>
                <h3>Simualador de investimentos</h3>
                <p>Uma API que permite simular seus investimentos e também lida com simulações dos rendimentos da renda fixa.</p>
                <button><a href="https://github.com/dev-ribeiro/investments-simulator">Acessar</a></button>
            </div>
        </main>
    )
}

export default Projects

import style from "./Projects.module.css";

export default function Projects() {

    return (<main className={style.projects}>
                <div>
                    <h3>Simulador de investimentos</h3>
                    <p>Uma API que permite calcular rendimentos de aplicação e buscar opções de investimentos.</p>
                    <a href="https://dev-ribeiro.github.io/investments-simulator/"><button>Acessar</button></a>
                </div>
                <div>
                    <h3>Bingo</h3>
                    <p>Um site que vai reproduzir um sistema de um bingo, com HTML, CSS e Javascript "puro".</p>
                    <a href="https://dev-ribeiro.github.io/bingo-online/"><button>Acessar</button></a>
                </div>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
    </main>)
}
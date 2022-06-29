import style from "./Projects.module.css";

export default function Projects(){
    return(<main className={style.projects}>
        <div>
            <h3>Simulador de investimentos</h3>
            <p>Uma API que permite calcular rendimentos de aplicação e buscar opções de investimentos.</p>
        </div>
    </main>)
}
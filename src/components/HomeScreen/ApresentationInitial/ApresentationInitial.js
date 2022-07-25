import style from "./ApresentationInitial.module.css";

export default function ApresentationInitial() {
    return (
        <section className={style.apresentation}>
            <div className={style.history}>
                <h2>{">>>"} Hello World</h2>
                <p>Sou David Ribeiro. Iniciei meus estudos da área de programação desde 2021 e atuei principalmente desenvolvendo projetos pessoais. Nesse sentido, minha ênfase de estudos atualmente é voltada para o backend. Além disso, também domino as tecnologias do "MERN" (M - MongoDB, E - Express, R - React e N - NodeJS), um poderoso conjunto de ferramentas. </p>
            </div>
        </section>
    )
};
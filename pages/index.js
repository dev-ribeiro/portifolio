import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="home">
                <div className="homeContent">
                    <h2>&gt;&gt;Hello world</h2>
                    <p className="apresentation">Sou David Ribeiro. Estudo programação e outros conteúdos da área de tecnologia, desde novembro de 2021, mas tenho afinidade com computadores desde a adolescência. Atualmente, estou cursando uma graduação na área e também complemento o estudo da programação com cursos livres e muita prática, com exercícios e projetos.</p>
                </div>
            </main>
            <Footer />
        </>
    )
};
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

export default function Index() {
    return (
        <>
            <Header></Header>
            <main>
                <section className="apresentation">
                    <img src="/assets/images/binary.jpg"></img>
                    <img src="/assets/images/code1.jpg"></img>
                    <img src="/assets/images/code2.jpg"></img>
                    <img src="/assets/images/ia.jpg"></img>
                </section>
                <section className="techs">
                    <section>
                        <img src="/assets/icons/html.png"></img>
                        <article>
                            <h2>HTML</h2>
                            <p>Minha vivência com a Linguagem de Marcação de Hipertexto (HTML) vai desde o desenvolvimento básico, conhecimento das tags, até o envio de dados por meio de formulários. Também estudo os recursos de acessibilidade contidos na seara de tags HTML.</p>
                        </article>
                    </section>
                    <section>
                        <img src="/assets/icons/css-3.png"></img>
                        <article>
                            <h2>CSS</h2>
                            <p>Estudo continuamente a "Folha de Estilos em Cascata" (CSS). Especificamente, novos recursos de animações e transições.</p>
                        </article>
                    </section>
                    <section>
                        <img src="/assets/icons/java-script.png"></img>
                        <article>
                            <h2>Javascript</h2>
                            <p>A primeira linguagem de programação que estudei e dedico esforços atualmente para meu aprimoramento nas stacks relacionadas com essa linguagem, como Node JS e React JS.</p>
                        </article>
                    </section>
                    <section>
                        <img src="/assets/icons/nodejs.png"></img>
                        <article>
                            <h2>Node JS</h2>
                            <p>Estudo e busco aprimoramento contínuo com o Node JS. Utilizo no desenvolvimento de API Restful e até com algumas rotinas que decidi automatizar.</p>
                        </article>
                    </section>
                    <section>
                        <img src="/assets/icons/physics.png"></img>
                        <h2>React</h2>
                        <p>A principal biblioteca voltada para o frontend que tenho dedicado esforços, atualmente. Estou estudando e desenvolvendo tanto com o React JS e React Native. Além disso, já comecei a estudar o framework Next JS (inclusive a criação dessa página de portifólio é feita com Next).</p>
                    </section>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
};
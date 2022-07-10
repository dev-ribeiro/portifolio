
import style from "./Projects.module.css";

export default function Projects() {

    return (<main className={style.projects}>
                <div>
                    <h3>Simulador de investimentos</h3>
                    <img src="/assets/images/projects/money.png"></img>
                    <p>Uma API que permite calcular rendimentos de aplicação e buscar opções de investimentos.</p>
                    <a href="https://dev-ribeiro.github.io/investments-simulator/"><button>Acessar</button></a>
                </div>

                <div>
                    <h3>Bingo</h3>
                    <img src="/assets/images/projects/bingo.png"></img>
                    <p>Um site que vai reproduzir um sistema de um bingo, com HTML, CSS e Javascript "puro".</p>
                    <a href="https://dev-ribeiro.github.io/bingo-online/"><button>Acessar</button></a>
                </div>

                {/* <div>
                    <h3>Binance BOT</h3>
                    <img src="/assets/images/projects/bingo.png"></img>
                    <p>Uma aplicação em Node.JS que permite realizar compras e vendas dentro do servidor de testes TESTNET da Binance. Em breve divulgação dessa aplicação.</p>
                    <a href="/"><button>Acessar</button></a>
                </div> */}

    </main>)
}
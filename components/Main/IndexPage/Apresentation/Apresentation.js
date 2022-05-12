import style from '../../../../styles/Main/IndexPage.module.css'

function Apresentation(){
    return(
        <section className={style.apresentation}>
            <h2>&gt;&gt; Hello World</h2>
            <p>Sou o David. Estou estudando as tecnologias relacionadas ao desenvolvimento WEB. Sou um entusiasta no segmento de tecnologia e tenho bastante interesse na área. Atuo na área do desenvolvimento WEB, na criação de páginas estáticas e SPA (Single Page Application). Confiram meus projetos no botão abaixo.</p>
            <button className={style.button}><a href='https://github.com/dev-ribeiro'>Saiba mais</a></button>
        </section>
    )
};

export default Apresentation
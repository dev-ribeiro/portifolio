import style from "../styles/Home.module.css"
import Header from "../components/Header"

function Home(){
    return (
        <div className={style.home}>
            <Header></Header>
        </div>
    )
};

export default Home
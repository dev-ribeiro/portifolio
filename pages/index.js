import Header from "../components/Header/Header";
import Main from "../components/Home/Main";
import style from "../styles/Home/Home.module.css";

function Home(){

    return (
        <div className={style.home}>
            <Header></Header>
            <Main></Main>
        </div>
    )
};

export default Home
import style from "../styles/Home.module.css"
import Header from "../components/Header";
import About from "../components/Home/About";
import Techs from "../components/Home/Techs";


function Home(){
    return (
        <div className={style.home}>
            <Header></Header>
            <About></About>
            <Techs></Techs>
        </div>
    )
};

export default Home
import Techs from "../Main/Techs";
import About from "../Main/About";
import style from "../../styles/Home/Home.module.css"

function Main(){
    return(
        <div className={style.main}>
            <About></About>
            <Techs></Techs>
        </div>
    )
}

export default Main
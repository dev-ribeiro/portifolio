import style from "../../styles/Header.module.css";
import Navigation from "./Navigation/Navigation";

function Header(){
    return(
        <header className={style.container}>
            <h2 className={style.logo}>David<br/> Ribeiro</h2>
            <Navigation></Navigation>
        </header>
    )
}

export default Header
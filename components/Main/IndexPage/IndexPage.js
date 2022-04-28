import Apresentation from "./Apresentation/Apresentation";
import style from "../../../styles/Main/IndexPage.module.css"

function IndexPage(){
    return(
        <main className={style.container}>
            <Apresentation></Apresentation>
        </main>
    )
}

export default IndexPage
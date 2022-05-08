import Header from "../components/Header/Header";
import Projects from "../components/Main/ProjectPage/Projects";
import Footer from "../components/Footer/Footer";
import style from "../styles/ProjectPage.module.css";

function ProjectPage(){
    return(
        <div className={style.container}>
            <Header></Header>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    )
};

export default ProjectPage
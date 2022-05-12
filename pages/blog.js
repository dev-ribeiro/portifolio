import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import style from "../styles/Main/Blog.module.css";

function BlogPage(){
    return(
        <div>
            <Header></Header>
            <h1 className={style.test}>Em desenvolvimento</h1>
            <Footer></Footer>
        </div>
    )
}

export default BlogPage
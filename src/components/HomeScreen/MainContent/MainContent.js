import style from "./MainContent.module.css";
import ApresentationInitial from "../ApresentationInitial/ApresentationInitial";

export default function MainContent() {
    return (
        <main className={style.mainContent}>
            <ApresentationInitial/>
        </main>
    )
};
import Header from "../src/components/GeneralComponents/Header/Header";
import Menu from "../src/components/GeneralComponents/Menu/Menu";
import ApresentationInitial from "../src/components/HomeScreen/ApresentationInitial/ApresentationInitial";

export default function HomePage() {
    return (
        <>
            <Header/>
            <main>
                <Menu/>
                <ApresentationInitial/>
            </main>
        </>
    )
};
import Nav from "../Nav/Nav";

export default function Header(props) {
    return (
        <header className="mainHeader">
            <h1 className="logo">
                <span className="nameDev">DEV</span><br />
                <span className="secondName">Ribeiro</span>
            </h1>
            <Nav />
        </header>
    )
}
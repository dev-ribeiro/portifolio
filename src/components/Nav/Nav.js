import Link from "next/link";
import { useState } from "react";

export default function Nav(props) {

    const [show, setShow] = useState(false);

    return (
        <nav
            onClick={() => { setShow(true) }}
            onMouseLeave={() => { setShow(false) }}
            className={show == false ? "navigation initialNav" : "navigation showNav"}
        >
            <Link href="/"><a className="linkName">Home</a></Link>
            <Link href="/projects"><a className="linkName">Projetos</a></Link>
            <Link href="/about"><a className="linkName">Sobre</a></Link>
        </nav>
    )
}
import Link from "next/link";

export default function Nav(props) {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/projects"><a>Projetos</a></Link>
            <Link href="/about"><a>Sobre</a></Link>
        </nav>
    )
}
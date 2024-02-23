import Link from "next/link"

const Navbar = () => {
    return (
        <ul>
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/portfolio'>Portfolio</Link>
            </div>
        </ul>
    )
}
export default Navbar
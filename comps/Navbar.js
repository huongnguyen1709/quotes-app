import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Quotes Lists</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/quotes"><a>Quotes Lists</a></Link>
        </nav>
     );
}
 
export default Navbar;
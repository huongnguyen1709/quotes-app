import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image className={styles.image} src='/logo.jpeg' width={100} height={100} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/random"><a>Random</a></Link>
            <Link href="/daily"><a>Daily</a></Link>
            <Link href="/quotes"><a>Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;
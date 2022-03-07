import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" height={70} width={90} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninja/"><a>Ninja List</a></Link>
        </nav>
        
    );
}
 
export default Navbar;
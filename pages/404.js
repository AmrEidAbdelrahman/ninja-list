import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
    })

    return (
        <div className="not-found">
            <h1>Opssssss....</h1>
            <p>This Page Can&apos;t Be Found</p>
            <p>Go Back To <Link href="/"><a>Home Page</a></Link></p>    
        </div>
    );
}
 
export default NotFound;
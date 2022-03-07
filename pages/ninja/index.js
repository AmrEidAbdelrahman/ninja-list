import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { Ninjas: data }
    }
}

const Ninja = ({ Ninjas }) => {
    return (
        <div>
            <h1>Ninja Page</h1>
            {Ninjas.map( ninja => (
                <Link href={'/ninja/' + ninja.id}key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninja;
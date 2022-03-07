import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem bisad dasd wq dawqdasd q dsadqwdqs dasdqwd saqwasd qwdsdawdas wq das asdqwdas dqwd asdsa wqdaswdas dwd aswdasdasdaw dsadawdasd wqdasf wdadas wadaLorem bisad dasd wq dawqdasd q dsadqwdqs dasdqwd saqwasd qwdsdawdas wq das asdqwdas dqwd asdsa wqdaswdas dwd aswdasdasdaw dsadawdasd wqdasf wdadas wadaLorem bisad dasd wq dawqdasd q dsadqwdqs dasdqwd saqwasd qwdsdawdas wq das asdqwdas dqwd asdsa wqdaswdas dwd aswdasdasdaw dsadawdasd wqdasf wdadas wada</p>
        <p className={styles.text}>Lorem bisad dasd wq dawqdasd q dsadqwdqs dasdqwd saqwasd qwdsdawdas wq das asdqwdas dqwd asdsa wqdaswdas dwd aswdasdasdaw dsadawdasd wqdasf wdadas wadaLorem bisad dasd wq dawqdasd q dsadqwdqs dasdqwd saqwasd qwdsdawdas wq das asdqwdas dqwd asdsa wqdaswdas dwd aswdasdasdaw dsadawdasd wqdasf wdadas wadaLorem bisad dasd wq dawqdasd q dsadqwdqs dasdqwd saqwasd qwdsdawdas wq das asdqwdas dqwd asdsa wqdaswdas dwd aswdasdasdaw dsadawdasd wqdasf wdadas wada</p>
        <Link href="/ninja/" ><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}

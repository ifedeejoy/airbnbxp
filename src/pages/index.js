import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import styles from '../assets/styles/Home.module.css'

const Home = () => {
    return (
        <main>
            <Navbar />
            <Banner />
            <div className={styles.textContainer}>
                <h1 className={styles.headerText}>Online Experiences</h1>
                <p className={styles.bodyText}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </main>
    )
}

export default Home
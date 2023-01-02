import Tile1 from '../assets/images/bannerTiles/22.png'
import Tile2 from '../assets/images/bannerTiles/23.png'
import Tile3 from '../assets/images/bannerTiles/24.png'
import Tile4 from '../assets/images/bannerTiles/25.png'
import Tile5 from '../assets/images/bannerTiles/26.png'
import Tile6 from '../assets/images/bannerTiles/27.png'
import Tile7 from '../assets/images/bannerTiles/28.png'
import Tile8 from '../assets/images/bannerTiles/29.png'
import Tile9 from '../assets/images/bannerTiles/30.png'
import styles from '../assets/styles/Banner.module.css'

const Banner = () => {
    return (
    <div>
        <section className={styles.bannerSection}>
            <div className={styles.tile1}>
                <img src={Tile7} alt="tile1" />
            </div>
            <div className={styles.tile2}>
                <img src={Tile9} alt="tile2" />
                <img src={Tile5} alt="tile3" />
            </div>
            <div className={styles.tile3}>
                <img src={Tile6} alt="tile3" />
                <img src={Tile8} alt="tile4" />
            </div>
            <div className={styles.tile4}>
                <img src={Tile1} alt="tile5" />
                <img src={Tile2} alt="tile6" />
            </div>
            <div className={styles.tile5}>
                <img src={Tile3} alt="tile7" />
                <img src={Tile4} alt="tile8" />
            </div>
        </section>
    </div>
    )
}

export default Banner
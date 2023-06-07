import styles from './Home.module.scss'
import { Calculator } from './calculator/Calculator';

export const Home = () => {
    return (
        <div className={styles.home}>
            <Calculator />
        </div>
    )
}

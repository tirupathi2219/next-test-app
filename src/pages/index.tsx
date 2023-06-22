import Header from '@/components/Header'
import styles from '@/styles/Main.module.css'
export default function Main() {
    return (
        <div className={styles.Main}>
            <h1 style={{backgroundColor:'blueviolet'}}>Welcome to Next</h1>
            <Header/>
        </div>
    )
}
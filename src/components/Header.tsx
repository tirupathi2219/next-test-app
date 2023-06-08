import Link from "next/link";
import styles from '@/styles/Main.module.css'

export default function Header() {
    return (
        <div className={styles.nav}>
            <Link href='/home'>Home</Link>
            <Link href='/info'>Info</Link>
            <Link href='/career'>Career</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    )
}
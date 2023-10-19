import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <nav className={styles.navbarMain}>
            <section className={styles.navLeft}>
                <a className={styles.navLogo} href="#">Book store</a>
            </section>
            <form className={styles.navSearchForm}>
                <select className={styles.searchDropdown}>
                    <option value="Todos">Todos</option>
                    <option value="Livros">Livros</option>
                    <option value="Hq">Quadrinhos</option>
                    <option value="Ebooks">eBooks</option>
                </select>
                <input 
                    className={styles.searchField}
                    type="text"  
                    placeholder="O que você está buscando?"
                />
                <button className={styles.searchBtn} type="submit">
                    <MagnifyingGlass />
                </button>
            </form>
            <section className={styles.navRight}>
                <p>Login</p>
                <p>CART</p>
            </section>
        </nav>      
    )
}
    


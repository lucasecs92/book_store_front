import { Basket, MagnifyingGlass, User } from '@phosphor-icons/react'
import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <nav className={styles.navbarMain}>
            <section className={styles.navLeft}>
                <a className={styles.navLogo} href="#">Book store</a>
            </section>
            <form className={styles.navSearchForm}>
                <select className={styles.dropdownMenu}>
                    <option className={styles.dropdownItem} value="Todos">Todos</option>   
                    <option className={styles.dropdownItem} value="Nome do livro">Nome do livro</option>
                    <option className={styles.dropdownItem} value="Autor">Autor</option>
                    <option className={styles.dropdownItem} value="Titulo">Título</option>
                    <option className={styles.dropdownItem} value="Editora">Editora</option>
                    <option className={styles.dropdownItem} value="Descrição">Descrição</option>
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
            <nav className={styles.navRight}>
                <ul className={styles.navRightUl}>
                    <li className={styles.navLogin}>
                        <aside><User /></aside>
                        <a href="#">Login</a>
                    </li>
                    <li className={styles.navCart}>
                        <aside><Basket /></aside>
                        <a href="#">Cart</a>
                    </li>
                </ul>
            </nav>
        </nav>      
    )
}
    


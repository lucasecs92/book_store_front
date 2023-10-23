import { FacebookLogo, InstagramLogo, PinterestLogo, YoutubeLogo } from '@phosphor-icons/react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <section className={styles.footer}>
            <section className={styles.dividingLine}>
            </section>

            <section className={styles.mainFooter}>
                <section className={styles.leftFooter}>
                    <a className={styles.logo} href="#">Book store</a>
                </section>
                <aside className={styles.rightFooter}>
                    <aside className={styles.footerWrapper}>
                        <h2>About Us</h2>
                        <ul>
                            <li><a href="#">ARTICLES</a></li>
                            <li><a href="#">VISION</a></li>
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="#">SERVICE TERMS</a></li>
                            <li><a href="#">DONATE</a></li>
                        </ul>
                    </aside>
                    <aside className={styles.footerWrapper}>
                        <h2>Discover</h2>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">BOOKS</a></li>
                            <li><a href="#">AUTHORS</a></li>
                            <li><a href="#">SUBJECTS</a></li>
                            <li><a href="#">ADVANCED SEARCH</a></li>
                        </ul>
                    </aside>
                    <aside className={styles.footerWrapper}>
                        <h2>My Account</h2>
                        <ul>
                            <li><a href="#">SIGN</a></li>
                            <li><a href="#">VIEW CART</a></li>
                            <li><a href="#">MY WISHLIST</a></li>
                            <li><a href="#">TRACK MY ORDER</a></li>
                        </ul>
                    </aside>
                    <aside className={styles.footerWrapper}>
                        <h2>Help</h2>
                        <ul>
                            <li><a href="#">HELP CENTER</a></li>
                            <li><a href="#">REPORT A PROBLEM</a></li>
                            <li><a href="#">SUGGESTING EDITS</a></li>
                            <li><a href="#">CONTACT US</a></li>
                        </ul>
                    </aside>
                </aside>
            </section>

            <section className={styles.secondaryFooter}>
                <p>Copyright (c) 2023 Book Store.</p>
                <section className={styles.socialLogos}>
                    <a className={styles.socialItem} href="#"><FacebookLogo /></a>
                    <a className={styles.socialItem} href="#"><YoutubeLogo /></a>
                    <a className={styles.socialItem} href="#"><InstagramLogo /></a>
                    <a className={styles.socialItem} href="#"><PinterestLogo /></a>
                </section>
            </section>
        </section>
    )
}
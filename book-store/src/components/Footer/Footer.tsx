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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam id ea vero, saepe, optio itaque quia fugiat, exercitationem eveniet necessitatibus velit! Corporis non vitae voluptate accusamus deleniti harum exercitationem officia!</p>
                </aside>
            </section>

            <section className={styles.secondaryFooter}>
                <p>Copyright (c) 2023 Lucas Eduardo</p>
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
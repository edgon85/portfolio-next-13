import Image from 'next/image';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>2023 EdgonApps. All rights reserved</div>
      <div className={ styles.social}>
        <Image className={styles.icon} src="/1.png" alt="Facebook account" width={15} height={15} />
        <Image className={styles.icon} src="/2.png" alt="Instagram account" width={15} height={15} />
        <Image className={styles.icon} src="/3.png" alt="Twitter account" width={15} height={15} />
        <Image className={styles.icon} src="/4.png" alt="YouTube account" width={15} height={15} />
      </div>
    </footer>
  );
};

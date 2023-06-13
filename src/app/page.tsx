import Image from 'next/image';

import Hero from 'public/hero.png';
import styles from './page.module.css';
import { BtnLink } from '@/components';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products
          </h1>
          <p className={styles.desc}>
            Turning your idea into reality, we bring together the teams from the
            global tech industry
          </p>

          
          <BtnLink path="/portfolio" text="See our works" />
        </div>

        <div className={styles.item}>
          <Image src={Hero} alt="hero" className={styles.img} />
        </div>
      </section>
    </main>
  );
}

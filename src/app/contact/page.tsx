import Image from 'next/image';
import styles from './contact.module.css';
import { BtnLink } from '@/components';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Let's Keep in Touch</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill
            priority
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <BtnLink path="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

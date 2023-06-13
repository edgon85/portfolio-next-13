import Image from 'next/image';
import styles from './blog.module.css';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <Link href={`/blog/1234`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href={`/blog/1234`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href={`/blog/1234`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPage;

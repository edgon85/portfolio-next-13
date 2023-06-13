import Image from 'next/image';
import styles from './blog-detail.module.css';

const BlogPost = () => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corrupti quasi, quas voluptas, ex itaque natus culpa quae sapiente
            enim modi cumque in. Odit sed molestiae quae, modi accusantium
            neque?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum
          ea tempore aperiam hic dolor vero voluptates odit voluptas magnam id,
          et voluptatem accusantium minima unde ipsum sunt, sint aspernatur.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

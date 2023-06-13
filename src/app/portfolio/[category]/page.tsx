import { BtnLink } from '@/components';
import styles from './category.module.css';
import { items } from './data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const getData = (cat: string) => {
  // const section: keyof items = "applications";
  const data = items.filter((resp) => resp.category === cat);

  console.log(data);
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }: any) => {
  console.log(params.category);
  const data = getData(params.category);

  return (
    <div className={styles.porCategory}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>

            <BtnLink text="See more" path="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

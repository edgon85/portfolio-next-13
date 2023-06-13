import Link from 'next/link';

import styles from './btnLink.module.css';

type Props = {
  text: string;
  path: string;
};

export const BtnLink = ({ text, path }: Props) => {
  return (
    <Link className={styles.btn} href={path}>
      {text}
    </Link>
  );
};

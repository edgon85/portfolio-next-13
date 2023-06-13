import styles from './portfolio.module.css';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;

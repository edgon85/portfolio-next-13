import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Portfolio', path: '/portfolio' },
  { id: 3, title: 'Blog', path: '/blog' },
  { id: 4, title: 'About', path: '/about' },
  { id: 5, title: 'Contact', path: '/contact' },
  { id: 6, title: 'Dashboard', path: '/dashboard' },
];

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        LANDING
      </Link>
      <nav className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.path} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </nav>
    </div>
  );
};

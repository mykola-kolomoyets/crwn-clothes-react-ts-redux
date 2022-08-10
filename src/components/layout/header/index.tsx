import { FC, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '@icons/crown.svg';

import { links } from './header.constants';

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <Link className={styles.header__logo} to="/">
          <Logo />
        </Link>

        <nav className={styles.header__nav}>
          {links.map((link) => (
            <Link
              key={link.to}
              className={styles.header__nav_link}
              to={link.to}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </header>

      <Outlet />
    </Fragment>
  );
};

export { Header };

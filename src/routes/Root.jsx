import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/root.module.css';

function Root() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Math magician</h1>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink to="/" className={styles.a}>
                Home
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/calculator" className={styles.a}>
                Calculator
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="quote" className={styles.a}>
                Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="details">
        <Outlet />
      </div>
    </div>

  );
}

export default Root;

import React from 'react';
import styles from './Options.module.sass';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';

function Options () {
  return (
    <>
      <h2>Need More Options?</h2>
      <p className={styles.optionsBody}>
        Two ways to find your perfect brand name
      </p>
      <div className={styles.optionContainer}>
        <div className={styles.cartOptions}>
          <img src={icon1} alt='icon1' />
          <h3 className={styles.optionsTitle}>Browse All Names</h3>
          <p className={styles.optionsBody}>
            Explore our curated collection of premium brand names for sale with
            a matching URL.
          </p>
          <a className={styles.optionsLink} href='#'>
            View All Names
          </a>
        </div>
        <div className={styles.cartOptions}>
          <img src={icon1} alt='icon2' />
          <h3 className={styles.optionsTitle}>Launch A Contest</h3>
          <p className={styles.optionsBody}>
            Get custom name ideas from hundreds of naming experts in real time.
          </p>
          <a className={styles.optionsLink} href='#'>
            See How it Works
          </a>
        </div>
      </div>
    </>
  );
}

export default Options;

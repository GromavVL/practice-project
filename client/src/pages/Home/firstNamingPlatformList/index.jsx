import React from 'react';
import styles from './Platform.module.sass';
import firstNamingPlatform from './firstNamePlatform.json';

function FirstNamingPlatformList () {
  return (
    <section className={styles.sectionCart}>
      <ul className={styles.listCart}>
        {firstNamingPlatform.map((c, i) => (
          <li className={styles.listEl} key={i}>
            <img src={c.iconSrc} alt={c.title} />
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FirstNamingPlatformList;

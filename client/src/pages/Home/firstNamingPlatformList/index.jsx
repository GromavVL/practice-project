import React from 'react';
import styles from './Platform.module.sass';
import firstNamingPlatform from './firstNamePlatform.json';

function FirstNamingPlatformList () {
  return (
    <>
      <div className={styles.namingPlatformListContainer}>
        <h2>World's #1 Naming Platform</h2>
        <ul className={styles.namingPlatformList}>
          {firstNamingPlatform.map((c, i) => (
            <li key={i}>
              <div className={styles.namingPlatformArticle}>
                <img src={c.iconSrc} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FirstNamingPlatformList;

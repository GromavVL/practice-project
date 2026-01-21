import React from 'react';
import card from './Card.json';
import styles from './CardDomin.module.sass';

function CardDomin () {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleContainerH2}>🔥 Popular Domains</h2>
        <p>Browse and interact to get personalized picks</p>
      </div>
      <div className={styles.cartWrapper}>
        {card.map(c => (
          <article className={styles.cart}>
            <div className={styles.imagesBlock}>
              <img className={styles.imagesCart} src={c.iconSrc} alt='' />
            </div>
            <div className={styles.cardBody}>
              <h3>{c.title}</h3>
              <p>${c.price}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default CardDomin;

import React from 'react';
import styles from './RecommendedForYouPage.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardDomin from '../../components/CardDomin/CardDomin';
import Options from '../../components/Options/Options';

function RecommendedForYouPage () {
  return (
    <div className={styles.RecommendedForYouContainer}>
      <Header />
      <main className={styles.content}>
        <section className={styles.headerBanner}>
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.title}>✨ Recommended For You</h1>
              <p>Personalized picks based on your browsing & favorites</p>
            </div>
            <div className={styles.searchForm}>
              <input
                className={styles.headerInput}
                type='text'
                placeholder='Refine by keyword (e.g., tech, health, food...)'
              />
              <button className={styles.headerButton}>Refine</button>
            </div>
          </div>
        </section>
        <section className={styles.contentWrapper}>
          <CardDomin />
        </section>
        <section className={styles.sectionOptions}>
          <Options/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RecommendedForYouPage;

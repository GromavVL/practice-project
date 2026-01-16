import React from 'react';
import styles from './RecommendedForYouPage.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function RecommendedForYouPage () {
  return (
    <div className={styles.RecommendedForYouContainer}>
      <Header />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
}

export default RecommendedForYouPage;

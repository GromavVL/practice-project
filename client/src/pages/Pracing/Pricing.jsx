import React from 'react';
import styles from './Pracing.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import prices from './pricingList.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Pricing () {
  return (
    <div className={styles.pricingContainer}>
      <Header />
      <main className={styles.content}>
        <ul className={styles.cartWrapper}>
          {prices.map(p => (
            <li>
              <article className={styles.cart}>
                <div className={styles.cardTitle} style={{ border: `10px solid ${p.color}` }}>
                  <h3 className={styles.title} style={{ color: p.color }}>{p.type}</h3>
                  <p className={styles.priceInfo}>{p.describeType}</p>
                  <p className={styles.price} style={{ color: p.color }}>{p.price}</p>
                </div>
                <div className={styles.profitContainer}>
                  {p.profit.map(profit => (
                    <p className={styles.body} data-tooltip={profit.tooltip}>
                      {profit.body}
                    </p>
                  ))}
                </div>
                <Link className={styles.btn} to='/startContest' style={{ backgroundColor: p.color }}>
                  Start
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;

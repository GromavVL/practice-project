import componentsTast from './componentsTast.json';
import styles from './ComponentsTast.module.sass';

function ComponentsTast () {
  return (
    <div className={styles.containerHome}>
      <h3 className={styles.titleElement}>Like A Naming Agency, But Better</h3>
      <p className={styles.info}>
        With Atom's managed contests, leverage our team's naming expertise and
        our pool of 300K+ naming experts. Our hybrid-solution partners you with
        a trained Atom branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>
      <ul className={styles.work}>
        {componentsTast.map((c, i) => (
          <li className={styles.workContainer} key={i}>
            <img className={styles.imgElement} src={c.iconSrc} alt={c.title} />
            <p className={styles.title}>{c.title}</p>
            <p className={styles.infoText}>{c.body}</p>
          </li>
        ))}
      </ul>
      <a href='/dashboard' className={styles.linkLern}>
        Learn More
      </a>
    </div>
  );
}

export default ComponentsTast;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearAuthError } from '../../store/slices/authSlice';
import CONSTANTS from '../../constants';
import RegistrationRight from './assets/RegistrationRight .json';
import RegistrationLeft from './assets/RegistrationLeft.json';

const { TEL_NUMBER } = CONSTANTS.COMPANY_CONTACTS;

const RegistrationPage = props => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>
          <div className={styles.ColumnContainer}>
            {RegistrationLeft.map(l => (
              <>
                <div className={styles.headerArticle}>{l.title}</div>
                <div className={styles.article}>{l.body}</div>
              </>
            ))}
          </div>
          <div className={styles.ColumnContainer}>
            {RegistrationRight.map(r => (
              <>
                <div className={styles.headerArticle}>{r.title}</div>
                <div className={styles.article}>{r.body}</div>
              </>
            ))}
            <div className={styles.headerArticle}>
              I have other questions! How can I get in touch with Squadhelp?
            </div>
            <div className={styles.article}>
              Check out our <span className={styles.orangeSpan}>FAQs</span> or
              send us a<span className={styles.orangeSpan}>message</span>. For
              assistance with launching a contest, you can also call us at{' '}
              {`${TEL_NUMBER}`} or schedule a
              <span className={styles.orangeSpan}>Branding Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);

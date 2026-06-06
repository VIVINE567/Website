// Barrel re-export — combines all style modules into one object.
// Used for backward-compat (import S from '../styles') and by components
// that need styles from multiple domains.
import navStyles from './nav';
import preloaderStyles from './preloader';
import heroStyles from './hero';
import aboutStyles from './about';
import featureCardsStyles from './featureCards';
import productsStyles from './products';
import applicationsStyles from './applications';
import inquiryStyles from './inquiry';
import ctaStyles from './cta';
import contactStyles from './contact';
import footerStyles from './footer';
import modalStyles from './modal';
import defaultPageStyles from './defaultPage';
import sharedStyles from './shared';

const S = {
  ...navStyles,
  ...preloaderStyles,
  ...heroStyles,
  ...aboutStyles,
  ...featureCardsStyles,
  ...productsStyles,
  ...applicationsStyles,
  ...inquiryStyles,
  ...ctaStyles,
  ...contactStyles,
  ...footerStyles,
  ...modalStyles,
  ...defaultPageStyles,
  ...sharedStyles,
};

export default S;

const default_locale = 'en';
let LOCALE = default_locale;

import en from '../translations/en';
import ca from '../translations/ca';
import es from '../translations/es';

const languages = { en, es, ca };

export function setLocale(ln = default_locale) {
  LOCALE = ln;
}

export function t(key) {
  return languages[LOCALE][key];
}

import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

const default_locale = 'ca';
let LOCALE = default_locale;

import ca from '../translations/ca';
import es from '../translations/es';

const languages = { es, ca };

export function setLocale(ln = default_locale) {
  LOCALE = ln;
}

export function t(key, params = {}) {
  const key_dots = key.split('.');
  let translation = languages[LOCALE];

  key_dots.forEach((key_dot) => {
    if (translation && typeof translation === 'object') {
      translation = translation[key_dot];
    }
  });

  if (!translation) {
    translation = key
  }

  Object.keys(params).forEach((param_name) => {
    let param_value = params[param_name];

    if (typeof param_value === 'object') {
      param_value = ReactDOMServer.renderToStaticMarkup(param_value);
    }

    translation = translation.replace(`%{${param_name}}`, param_value);
  });

  if (params.html) {
    return <span dangerouslySetInnerHTML={{__html: translation}} />;
  } else {
    return translation;
  }
}

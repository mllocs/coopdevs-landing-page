import { t } from '../lib/i18n';
import pathPrefix from '../lib/pathPrefix';

const Hero = () => (
  <div className='hero'>
    <div className='hero__logo'>
      <img src={pathPrefix('/static/logo.svg')} title={t('hero.title')} alt={t('hero.title')} />
    </div>

    <p>{t('hero.description_1', { html: true })}</p>
    <p>
      {t('hero.description_2', {
        link_pagina: <a href='http://community.coopdevs.org'>community.coopdevs.org</a>,
        link_github: <a href='https//github.com/coopdevs'>github.com/coopdevs</a>,
        link_espai: <a href='espai'>Espai 30</a>,
        html: true,
      })}
    </p>

    <style jsx>{`
      .hero__logo {
        width: 100%;
        padding: 30px 0;
      }

      .hero__logo img {
        width: 100%;
      }

      p {
        color: #333;
        margin: 16px 0;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
      }
    `}</style>
  </div>
);

export default Hero;

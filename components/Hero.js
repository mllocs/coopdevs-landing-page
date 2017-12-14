import { t } from '../lib/i18n';

const Hero = () => (
  <div className='hero'>
    <div className='hero__logo'>
      <h1>Coopdevs</h1>
      <h2>{t('hero.subtitle')}</h2>
    </div>

    <p>{t('hero.description_1')}</p>
    <p>
      {t('hero.description_2', {
        link_pagina: <a href='http://community.coopdevs.org'>community.coopdevs.org</a>,
        link_github: <a href='https//github.com/coopdevs'>github.com/coopdevs</a>,
        link_espai: <a href='espai'>Espai 30</a>
      })}
    </p>

    <style jsx>{`
      .hero { }

      .hero__logo {
        width: 100%;
        text-align: center;
        padding: 60px 0 80px;
        vertical-align: top;
      }

      h1 {
        display: inline-block;
        font-size: 78px;
        color: #39BBD5;
        font-weight: 600;
        text-shadow: 1px 1px 2px #ccc;
        text-transform: uppercase;
        vertical-align: top;
        padding: 0;
        margin: 0;
        line-height: 64px;
        font-family: Arial;
      }

      h2 {
        display: inline-block;
        color: #555;
        text-align: left;
        font-weight: 200;
        font-size: 28px;
        text-transform: uppercase;
        width: 380px;
        text-shadow: 1px 1px 0 #eee;
        margin: 0 0 0 28px;
        vertical-align: top;
        font-family: Arial;
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

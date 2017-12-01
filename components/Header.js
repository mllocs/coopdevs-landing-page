import { t } from '../lib/i18n';

const Header = () => (
  <div className='topbar'>
    <div></div>
    <div className='languages'>
      <a href='?ln=en' className='language'>English</a>
      <a href='?ln=es' className='language'>Español</a>
      <a href='?ln=ca' className='language'>Català</a>
      <div>{t('hello')}</div>
    </div>

    <style jsx>{`
      .topbar {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
        width: 100%;
      }

      .languages {
        margin-right: 10px;
        font-weight: 400;
      }

      a {
        margin-right: 20px;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default Header

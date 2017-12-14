import { t } from '../lib/i18n';

const Header = () => (
  <div className='topbar'>
    <div></div>
    <div className='languages'>
      <a href='?ln=ca' className='language'>Català</a>
      <a href='?ln=es' className='language'>Español</a>
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
        font-weight: 500;
        font-size: 18px;
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

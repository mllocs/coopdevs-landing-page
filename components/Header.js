const Header = () => (
  <div className='topbar'>
    <div></div>
    <div className='languages'>
      <a href='#' className='language'>English</a>
      <a href='#' className='language'>Spanish</a>
      <a href='#' className='language'>Catalan</a>
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

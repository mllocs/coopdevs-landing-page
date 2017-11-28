const logoSize = 220;

const Friend = ({ link, logo, name }) => (
  <div className='friend'>
    <a href={link} target='_blank'>
      <img src={logo} alt={name} title={name} width={logoSize} />
    </a>

    <style jsx>{`
      .friend {
        margin: 16px 20px;
      }
    `}</style>
  </div>
);

export default Friend;

import SocialLinks from './SocialLinks';

const logoSize = 140;
const logoPadding = 20;

const Project = (props) => {
  const projectStyles = {
    flexDirection: props.inverted ? 'row-reverse' : 'row',
  };

  const descriptionStyles = {
    padding: props.inverted ? `0 ${logoPadding}px 0 0` : `0 0 0 ${logoPadding}px`,
    textAlign: props.inverted ? 'right' : 'left',
  };

  return (
    <div className='project' style={projectStyles}>
      <img className='logo' src={props.logo} />
      <div className='description' style={descriptionStyles}>
        {props.children}
        <SocialLinks social={props.social} />
      </div>

      <style jsx>{`
        .project {
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
          margin: 50px 0;
        }

        .logo {
          width: ${logoSize}px;
          height: ${logoSize}px;
        }

        .description {
          font-size: 18px;
          color: #333;
        }
      `}</style>
    </div>
  )
};

export default Project;

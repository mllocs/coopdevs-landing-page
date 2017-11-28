import GithubLink from './GithubLink';
import TwitterLink from './TwitterLink';

const renderSocial = (social) => {
  return Object.keys(social).map((id) => {
    const handle = social[id];

    if (id === 'twitter') {
      return <TwitterLink handle={handle} />
    } else if (id === 'github') {
      return <GithubLink handle={handle} />
    } else {
      return (<div>Social not found</div>);
    }
  });
};


const SocialLinks = (props) => (
  <div className='social'>
    {renderSocial(props.social)}

    <style jsx>{`
      .social {
        margin: 16px 0 0;
      }
    `}</style>
  </div>
);

export default SocialLinks;

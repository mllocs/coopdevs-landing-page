import { Logo, Link, Wrapper, logoSize } from './styles';
import pathPrefix from '../../../lib/pathPrefix';

const GithubLink = ({ handle }) => (
  <Wrapper>
    <Logo src={pathPrefix('/static/social/github.png')} width={logoSize} height={logoSize} />
    <Link href={`https://github.com/${handle}`} target='_blank'>
      {handle}
    </Link>
  </Wrapper>
);

export default GithubLink;

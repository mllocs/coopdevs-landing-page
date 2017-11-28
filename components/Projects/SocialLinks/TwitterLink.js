import { Logo, Link, Wrapper, logoSize } from './styles';
import pathPrefix from '../../../lib/pathPrefix';

const TwitterLink = ({ handle }) => (
  <Wrapper>
    <Logo src={pathPrefix('/static/social/twitter.jpg')} width={logoSize} height={logoSize} />
    <Link href={`https://twitter.com/${handle}`}>
      {`@${handle}`}
    </Link>
  </Wrapper>
);

export default TwitterLink;

import { Logo, Link, Wrapper, logoSize } from './styles';

const TwitterLink = ({ handle }) => (
  <Wrapper>
    <Logo src='/static/social/twitter.jpg' width={logoSize} height={logoSize} />
    <Link href={`https://twitter.com/${handle}`}>
      {`@${handle}`}
    </Link>
  </Wrapper>
);

export default TwitterLink;

import { Logo, Link, Wrapper, logoSize } from './styles';

const GithubLink = ({ handle }) => (
  <Wrapper>
    <Logo src='/static/social/github.png' width={logoSize} height={logoSize} />
    <Link href={`https://github.com/${handle}`} target='_blank'>
      {handle}
    </Link>
  </Wrapper>
);

export default GithubLink;

import styled from 'styled-components';

const logoSize = 26;

const Logo = styled.img`
  width: ${logoSize}px;
  height: ${logoSize}px;
  margin: 0 8px 0 0;
  vertical-align: middle;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  vertical-align: middle;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.span`
  margin: 0 10px;
`;

export { Logo, Link, Wrapper, logoSize };

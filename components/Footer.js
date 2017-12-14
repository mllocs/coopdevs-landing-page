const Footer = () => (
  <footer>
    {"info@coopdevs.org"}
    <a href='http://community.coopdevs.org/' target='_blank'>Community forum</a>
    <a href='https://twitter.com/coopdevs' target='_blank'>@coopdevs</a>
    <a href='https://github.com/coopdevs' target='_blank'>github.com/coopdevs</a>

    <style jsx>{`
      footer {
        background: black;
        padding: 26px 0 30px;
        text-align: center;
        color: #888;
      }

      a {
        margin-left: 18px;
        color: #888;
      }
    `}</style>
  </footer>
);

export default Footer;

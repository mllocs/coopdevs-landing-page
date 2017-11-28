const Hero = () => (
  <div className='hero'>
    <div className='hero__logo'>
      <h1>Coopdevs</h1>
      <h2>Software lliure per a l'economia social</h2>
    </div>

    <p>
      Coopdevs és una associació de desenvolupadors de software que té com a objectiu
      <strong> impulsar solucions tecnològiques per fomentar i promoure l’economia social</strong>.
      Tots els projectes en que participem són de codi obert i llicència lliure.
    </p>

    <p>
      Si voleu col.laborar amb nosaltres ens podeu trobar
      a <a href='http://community.coopdevs.org'>community.coopdevs.org</a> i
      a <a href='https//github.com/coopdevs'>github.com/coopdevs</a>. També
      ens podeu escriure a <u>info@coopdevs.org</u> o visitar-nos
      a <a href='espai'>l’Espai 30</a> de la Sagrera.
    </p>

    <style jsx>{`
      .hero { }

      .hero__logo {
        width: 100%;
        text-align: center;
        padding: 20px 0 40px;
      }

      h1 {
        font-size: 120px;
        margin: 0 auto;
        padding-right: 140px;
        color: #39BBD5;
        font-weight: 400;
        line-height: 120px;
        text-shadow: 1px 1px 2px #ccc;
      }

      h2 {
        color: #555;
        text-align: left;
        font-weight: 200;
        font-size: 30px;
        margin: 0 auto 30px;
        padding-left: 140px;
        text-transform: uppercase;
        width: 300px;
        text-shadow: 1px 1px 0 #eee;
      }

      p {
        color: #333;
        margin: 16px 0;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
      }
    `}</style>
  </div>
);

export default Hero;

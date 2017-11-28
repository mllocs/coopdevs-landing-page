import Friend from './Friend';
import pathPrefix from '../../lib/pathPrefix';

const friends = [
  {
    name: 'Open Food Network',
    logo: pathPrefix('/static/friends/ofn.png'),
    link: 'https://openfoodnetwork.org/',
  },
  {
    name: 'La Comunificadora',
    logo: pathPrefix('/static/friends/la_comunificadora2.png'),
    link: 'http://emprenedoria.barcelonactiva.cat/emprenedoria/cat/programes/la-comunificadora.jsp',
  },
  {
    name: 'Som Connexió',
    logo: pathPrefix('/static/friends/som_connexio.png'),
    link: 'https://somconnexio.coop',
  },
  {
    name: 'Internet Interdisciplinary Institute (In3)',
    logo: pathPrefix('/static/friends/in3.gif'),
    link: 'http://www.uoc.edu/portal/ca/in3/index.html',
  },
  {
    name: 'Asociación para el Desarrollo de los Bancos de Tiempo',
    logo: pathPrefix('/static/friends/adbdt.jpg'),
    link: 'http://adbdt.org/',
  },
  {
    name: 'Som Mobilitat',
    logo: pathPrefix('/static/friends/som_mobilitat.png'),
    link: 'https://www.sommobilitat.coop/',
  },
];

const renderLogos = () => {
  return friends.map((friend, i) => {
    return (
      <Friend
        logo={friend.logo}
        name={friend.name}
        link={friend.link}
        key={i}
      />
    );
  });
};

const Friends = () => (
  <div>
    <h3>Col.laborem amb:</h3>

    <div className='friends'>
      {renderLogos()}
    </div>

    <style jsx>{`
      h3 {
        font-size: 24px;
        color: #333;
        text-transform: uppercase;
      }

      .friends {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

export default Friends;

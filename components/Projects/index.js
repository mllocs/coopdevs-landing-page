import Project from './Project';

const Projects = () => (
  <div className='projects'>
    <h3>Projectes:</h3>

    <Project
      logo='/static/projects/katuma.png'
      inverted={true}
      social={{github: 'coopdevs/openfoodnetwork', twitter: 'katuma_org'}}
    >
      <a href='http://www.katuma.org' target='_blank'>KATUMA</a> és una plataforma cooperativa que
      facilita la creació i gestió de grups de consum. Una alternativa més justa i sostenible a les
      grans distribuïdores i l'ús d'intermediaris comercials.
    </Project>

    <Project
      logo='/static/projects/timeoverflow.jpg'
      social={{github: 'coopdevs/timeoverflow', twitter: 'timeoverflow'}}
    >
      <a href='https://www.timeoverflow.org/' target='_blank'>TIME OVERFLOW</a> és una plataforma
      de gestió de Bancs de Temps, un sistema d'oferta de serveis a canvi de temps. La
      plataforma facilita les tasques de gestió
      i intercanvi de serveis entre els membres d'un banc.
    </Project>

    <style jsx>{`
      .projects {
        margin: 120px 0;
      }

      h3 {
        font-size: 24px;
        text-transform: uppercase;
      }

      a {
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default Projects;

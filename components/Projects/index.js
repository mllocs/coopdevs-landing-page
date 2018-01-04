import { t } from '../../lib/i18n';
import Project from './Project';
import pathPrefix from '../../lib/pathPrefix';

const Projects = () => (
  <div className='projects'>
    <h3>{t('projects.title')}</h3>

    <Project
      logo={pathPrefix('/static/projects/katuma.png')}
      inverted={true}
      social={{github: 'coopdevs/openfoodnetwork', twitter: 'katuma_org'}}
    >
      {t('projects.katuma.description', {link: <a href='http://www.katuma.org' target='_blank'>KATUMA</a>, html: true})}
    </Project>

    <Project
      logo={pathPrefix('/static/projects/timeoverflow.jpg')}
      social={{github: 'coopdevs/timeoverflow', twitter: 'timeoverflow'}}
    >
      {t('projects.timeoverflow.description', {link: <a href='https://www.timeoverflow.org/' target='_blank'>TIME OVERFLOW</a>, html: true})}
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

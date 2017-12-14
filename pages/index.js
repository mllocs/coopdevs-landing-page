import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Friends from '../components/Friends';

import { setLocale } from '../lib/i18n';

const Index = ({ url }) => {

  setLocale(url.query.ln);

  return (
    <Layout>
      <Hero />
      <Projects />
      <Friends />
    </Layout>
  )
};

export default Index

import Main from '../../components/Main';
import { setLocale } from '../../lib/i18n';

const Index = () => {
  setLocale('es');
  
  return (
    <Main />
  )
};

export default Index

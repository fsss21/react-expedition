import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const PapaninPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.papanin} />;
};

export default PapaninPage;

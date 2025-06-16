import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const OttoPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.otto} />;
};

export default OttoPage;

import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const CheluskinPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.cheluskin} />;
};

export default CheluskinPage;

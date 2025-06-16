import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const VodopyanovPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.vodopyanov} />;
};

export default VodopyanovPage;

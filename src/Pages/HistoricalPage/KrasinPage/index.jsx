import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const KrasinPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.krasin} />;
};

export default KrasinPage;

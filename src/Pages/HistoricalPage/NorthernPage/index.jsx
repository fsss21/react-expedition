import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const NorthernPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.northern} />;
};

export default NorthernPage;

import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const FrankPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.frank} />;
};

export default FrankPage;

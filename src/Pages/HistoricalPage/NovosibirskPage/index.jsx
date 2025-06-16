import Menu from '../../../components/Menu';
import { useLanguage } from '../../../LanguageContext';

const NovosibirskPage = () => {
  const { data } = useLanguage();
  return <Menu data={data.operations.novosibirsk} />;
};

export default NovosibirskPage;

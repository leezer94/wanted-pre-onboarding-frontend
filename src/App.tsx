import PAGES from '@/pages';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes(PAGES);

  return routes;
};

export default App;

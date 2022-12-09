import Home from '@/pages/Home/Home';
import SignUp from '@/pages/SignUp/SIgnUp';
import Login from '@/pages/Login/Login';
import Todo from '@/pages/Todo/todo';
import ROUTES from '@/components/constants/routes';

type Route = {
  element: JSX.Element;
  name?: string;
  path?: string;
  children?: Route[];
};

const PAGES: Route[] = [
  {
    path: ROUTES.TODO.PATH,
    name: ROUTES.TODO.NAME,
    element: <Todo />,
  },
  {
    path: ROUTES.LOGIN.PATH,
    name: ROUTES.LOGIN.NAME,
    element: <Login />,
  },
  {
    path: ROUTES.SIGN_UP.PATH,
    name: ROUTES.SIGN_UP.NAME,
    element: <SignUp />,
  },
  {
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
    element: <Home />,
  },
];

export default PAGES;

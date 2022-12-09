import Home from '@/pages/Home/Home';
import SignUp from '@/pages/SignUp/SIgnUp';
import Login from '@/pages/Login/Login';
import Todo from '@/pages/Todo/todo';
import ROUTES from '@/components/constants/routes';
import PrivateRouter from '@/components/@helper/router/PrivateRouter';
import PublicRouter from '@/components/@helper/router/PublicRouter';

type Route = {
  element: JSX.Element;
  name?: string;
  path?: string;
  children?: Route[];
};

const PAGES: Route[] = [
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO.PATH,
        name: ROUTES.TODO.NAME,
        element: <Todo />,
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
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
    ],
  },

  {
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
    element: <Home />,
  },
];

export default PAGES;

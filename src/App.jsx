import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GlobalStateContext } from 'GlobalStateProvider';
import { routes } from 'routes/routes';

function App() {
  const { isLoggedIn } = useContext(GlobalStateContext);
  const router = createBrowserRouter(routes(isLoggedIn));
  return <RouterProvider router={router} />;
}

export default App;

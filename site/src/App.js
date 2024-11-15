import './App.css';
import rolePermissions from "./utils/Permissions";
import {
  useLocation,
  useNavigate,
  useRoutes
} from 'react-router-dom'

import { 
  useEffect, 
  useState 
} from 'react';

import { 
  useDispatch, 
  useSelector 
} from 'react-redux';


import useRole from './hooks/useRole';
import ErrorPage from './reuseables/ErrorPage';

function App() {
  let role = useRole()
  const [activeRoutes, setActiveRoutes] = useState([]);
  const dispatch = useDispatch();
  
  
  const generateRoutes = (role) => {
    if (role && rolePermissions[role]) {
      if (role === 'admin') {
        const allRoutes = Object.keys(rolePermissions).map((key) => rolePermissions[key]).flat();
        setActiveRoutes(
          allRoutes.map((route) => ({
            path: route.path,
            element: route.component,
          })))
      } else {

        setActiveRoutes(
          rolePermissions[role].map((route) => ({
            path: route.path,
            element: route.component,
          })))
      }
    }
    else {
      setActiveRoutes([]);
    }
  };

  useEffect(() => {generateRoutes(role);}, [])

  const routes = useRoutes([
    ...activeRoutes,
    {
      path: "*",
      element: <ErrorPage />,
    }
  ]);

  return routes;
}

export default App;

import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config';
import configureValidations from './Validations'
import { useEffect, useState } from 'react';
import { claim } from './auth/auth.models';
import AuthenticationContext from './auth/AuthenticationContext';
import { getClaims } from './auth/HandleJWT';
import configureInterceptor from './utils/httpinterceptors';

configureValidations();
configureInterceptor();

function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims())
  }, [])

  

  return (

    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>

        <Menu />
        <div className="container">
          <Switch>
            {routes.map(route =>
              <Route key={route.path} path={route.path} exact={route.exact}>
                 <route.component />
              </Route>)}
          </Switch>
        </div>
      </AuthenticationContext.Provider>
    </BrowserRouter>

  )
}

export default App;

import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import Loading from './shared/Loading';

type Props = {
};

class App extends Component<Props> {
  componentDidMount() {
    // const params = new URLSearchParams(window.location.search);
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            {routes.map(({ path, exact, component: C, ...rest }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => <C {...props} {...rest} />}
              />
            ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

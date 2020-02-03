import { Component } from 'react';

type Route = {
  path: string,
  component: Component<*>,
  exact?: boolean,
};

const routes: Array<Route> = [];

export default routes;

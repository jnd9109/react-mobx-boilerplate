import { ComponentClass } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface Route extends RouteComponentProps {
  path: string;
  component: ComponentClass;
  exact?: boolean;
  rest?: any;
}

const routes: Route[] = [];

export default routes;

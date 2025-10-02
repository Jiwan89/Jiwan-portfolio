import React from 'react';
import {
  Switch, BrowserRouter, Router, Route,
} from 'react-router-dom';
import Admin from '../containers/admin';
import HomePage from '../containers/homePage';
import Blog from '../containers/mainSections/blog';
import NotFoundPage from '../containers/mainSections/notFoundPage';
import ArticlePage from '../containers/mainSections/articlePage';

export const renderRoutes = (routes) => routes
  .filter((route) => route.active)
  .map((route) => (
    <Route
      key={route.name}
      path={route.path}
      component={() => (
        <route.component name={route.name} testId={route.testId}>
          {
            !!route.children && renderRoutes(route.children)
          }
        </route.component>

      )}
      exact={route.exact}
    />
  ));

export const appRoutes = [
  {
    id: 1,
    testId: 'nav-route',
    name: 'Portfolio',
    path: '/',
    component: HomePage,
    exact: true,
    showOnTabs: true,
    active: true,
    description: 'home page',
  },
  {
    id: 2,
    testId: 'nav-route',
    name: 'Admin',
    path: '/admin',
    component: Admin,
    exact: true,
    showOnTabs: false,
    active: true,
    description: 'just admins',
  },
  {
    id: 3,
    testId: 'nav-route',
    name: 'Web Blog',
    path: '/web-blog',
    component: Blog,
    exact: true,
    showOnTabs: false,
    active: false,
    description: 'web development articles',
  },
  {
    id: 4,
    testId: 'nav-route',
    name: 'Life Style',
    path: '/life-style',
    component: () => <h2>Life Style</h2>,
    exact: false,
    showOnTabs: false,
    active: false,
    description: 'inactive: coming soon',
  },
  {
    id: 5,
    testId: 'nav-route',
    name: 'About',
    path: '/about',
    component: NotFoundPage,
    exact: false,
    showOnTabs: true,
    active: true,
    description: 'inactive: coming soon',
  },
  {
    id: 6,
    testId: 'article-page',
    name: 'Article Page',
    path: '/article/:section/:id',
    component: ArticlePage,
    exact: true,
    showOnTabs: false,
    children: false,
    active: true,
    description: 'article details',
  },
  {
    id: 7,
    testId: 'not-found-page',
    name: 'Not found page',
    path: '/',
    component: NotFoundPage,
    exact: false,
    showOnTabs: false,
    children: false,
    active: true,
    description: '404 page',
  },
];

export const Routes = ({ testEnv, history, children }) => {
  const RouterType = testEnv ? Router : BrowserRouter;
  return (
    <RouterType history={history}>
      {children}
      <Switch>
        {renderRoutes(appRoutes)}
      </Switch>
    </RouterType>
  );
};

export default appRoutes;

import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import GameLayout from '../views/GameLayout/GameLayout';

// GameLayout views

import MainMenu from '../views/MainMenu/MainMenu';

export const mainLayoutRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registro',
    component: Register
  },
  {
    path: '/',
    component: GameLayout
  }
];

export const gameLayoutRoutes = [
  {
    path: '/',
    component: MainMenu
  },
];

export const sidebarItems = [
  {
    title: 'Ver jugadores',
    icon: 'users'
  },
  {
    title: 'Tienda',
    icon: 'shop'
  },
  {
    title: 'Plantillas',
    icon: 'sitemap'
  },
  {
    title: 'Mi club',
    icon: 'trophy'
  },
];

export const mainMenuItems = [
  {
    title: 'Ver jugadores',
    description: 'Aquí podrás ver la información de todos los jugadores.',
    icon: 'users'
  },
  {
    title: 'Tienda',
    description: 'Compra sobres para obtener jugadores.',
    icon: 'shop'
  },
  {
    title: 'Plantillas',
    description: 'Crea tus propias plantillas con tus jugadores.',
    icon: 'sitemap'
  },
  {
    title: 'Mi club',
    description: 'Aquí podrás ver tu club.',
    icon: 'trophy'
  },
];

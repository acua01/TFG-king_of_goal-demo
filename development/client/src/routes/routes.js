import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import GameLayout from '../views/GameLayout/GameLayout';

// GameLayout views

import MainMenu from '../views/MainMenu/MainMenu';
import AdminMenu from '../views/Administration/AdminMenu/AdminMenu';
import Permissions from '../views/Administration/Permissions/Permissions';
import PermissionsForm from '../views/Administration/PermissionsForm/PermissionsForm';

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
    path: '/inicio',
    component: MainMenu
  },
  {
    path: '/admin',
    component: AdminMenu
  },
  {
    path: '/permisos',
    component: Permissions
  },
  {
    path: '/formulario_permisos',
    component: PermissionsForm
  },
];

export const sidebarItems = [
  {
    title: 'Ver jugadores',
    icon: 'users',
    route: '/inicio'
  },
  {
    title: 'Tienda',
    icon: 'shop',
    route: '/inicio'
  },
  {
    title: 'Plantillas',
    icon: 'sitemap',
    route: '/inicio'
  },
  {
    title: 'Mi club',
    icon: 'trophy',
    route: '/inicio'
  },
  {
    title: 'Administración',
    icon: 'chess king',
    route: '/admin'
  },
];

export const mainMenuItems = [
  {
    title: 'Ver jugadores',
    description: 'Aquí podrás ver la información de todos los jugadores.',
    icon: 'users',
    route: '/login'
  },
  {
    title: 'Tienda',
    description: 'Compra sobres para obtener jugadores.',
    icon: 'shop',
    route: '/inicio'
  },
  {
    title: 'Plantillas',
    description: 'Crea tus propias plantillas con tus jugadores.',
    icon: 'sitemap',
    route: '/inicio'
  },
  {
    title: 'Mi club',
    description: 'Aquí podrás ver tu club.',
    icon: 'trophy',
    route: '/inicio'
  },
  {
    title: 'Administración',
    description: 'Administración.',
    icon: 'chess king',
    route: '/admin'
  },
];

export const adminMenuItems = [
  {
    title: 'Permisos',
    description: 'Permisos.',
    icon: 'chess',
    route: '/permisos'
  },
];

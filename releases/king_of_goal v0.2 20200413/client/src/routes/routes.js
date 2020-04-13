import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import GameLayout from '../views/Game/GameLayout/GameLayout';

// GameLayout views

import MainMenu from '../views/Game/MainMenu/MainMenu';
import Admin from '../views/Administration/Admin/Admin';
import AdminMenu from '../views/Administration/AdminMenu/AdminMenu';
import Permissions from '../views/Administration/Permissions/Permissions';

export const mainLayoutRoutes = [
  {
    path: '/',
    component: Login,
    exact:true
  },
  {
    path: '/registro',
    component: Register
  },
  {
    path: '/inicio',
    component: GameLayout
  },
];

export const gameLayoutRoutes = [
  {
    path: '/',
    component: MainMenu,
    exact:true
  },
  {
    path: '/admin',
    component: Admin
  },
];

export const adminRoutes = [
  {
    path: '/',
    component: AdminMenu,
    exact:true
  },
  {
    path: '/permisos',
    component: Permissions
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
    route: '/inicio/admin',
    admin:true
  },
];

export const mainMenuItems = [
  {
    title: 'Ver jugadores',
    description: 'Aquí podrás ver la información de todos los jugadores.',
    icon: 'users',
    route: '/inicio'
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
    route: '/inicio/admin',
    admin:true
  },
];

export const adminMenuItems = [
  {
    title: 'Permisos',
    description: 'Permisos.',
    icon: 'chess',
    route: '/inicio/admin/permisos',
    admin:true
  },
];

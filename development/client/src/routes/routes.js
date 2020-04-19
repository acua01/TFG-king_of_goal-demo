import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import GameLayout from '../views/Game/GameLayout/GameLayout';

// GameLayout views

import MainMenu from '../views/Game/MainMenu/MainMenu';
import Admin from '../views/Administration/Admin/Admin';
import AdminMenu from '../views/Administration/AdminMenu/AdminMenu';
import Permissions from '../views/Administration/Permissions/Permissions';
import Players from '../views/Administration/Players/Players';
import Countries from '../views/Administration/Countries/Countries';
import Leagues from '../views/Administration/Leagues/Leagues';
import CardsTypes from '../views/Administration/CardsTypes/CardsTypes';

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
  {
    path: '/jugadores',
    component: Players
  },
  {
    path: '/paises',
    component: Countries
  },
  {
    path: '/ligas',
    component: Leagues
  },
  {
    path: '/tipos_cartas',
    component: CardsTypes
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
  {
    title: 'Jugadores',
    description: 'Jugadores.',
    icon: 'users',
    route: '/inicio/admin/jugadores',
    admin:true
  },
  {
    title: 'Países',
    description: 'Países.',
    icon: 'flag',
    route: '/inicio/admin/paises',
    admin:true
  },
  {
    title: 'Ligas',
    description: 'Ligas.',
    icon: 'globe',
    route: '/inicio/admin/ligas',
    admin:true
  },
  {
    title: 'Tipos de cartas',
    description: 'Tipos de cartas.',
    icon: 'square',
    route: '/inicio/admin/tipos_cartas',
    admin:true
  },
];

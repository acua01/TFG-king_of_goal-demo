import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import CreateClub from '../views/CreateClub/CreateClub';
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
import Teams from '../views/Administration/Teams/Teams';
import Cards from '../views/Administration/Cards/Cards';
import MyClubLayout from '../views/Game/MyClub/MyClubLayout/MyClubLayout';
import MyClubMenu from '../views/Game/MyClub/MyClubMenu/MyClubMenu';
import MyClubOptions from '../views/Game/MyClub/MyClubOptions/MyClubOptions';
import MyClubPlayers from '../views/Game/MyClub/MyClubPlayers/MyClubPlayers';

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
    path: '/crear_club',
    component: CreateClub
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
  {
    path: '/mi_club',
    component: MyClubLayout
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
  {
    path: '/equipos',
    component: Teams
  },
  {
    path: '/cartas',
    component: Cards
  },
];

export const myClubRoutes = [
  {
    path: '/',
    component: MyClubMenu,
    exact:true
  },
  {
    path: '/jugadores',
    component: MyClubPlayers
  },
  {
    path: '/opciones',
    component: MyClubOptions
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
    title: 'Mercado',
    description: 'Aquí podrás ver la información de todos los jugadores.',
    icon: 'line graph',
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
    route: '/inicio/mi_club'
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
    icon: 'user',
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
  {
    title: 'Equipos',
    description: 'Equipos.',
    icon: 'shield alternate',
    route: '/inicio/admin/equipos',
    admin:true
  },
  {
    title: 'Cartas',
    description: 'Cartas.',
    icon: 'users',
    route: '/inicio/admin/cartas',
    admin:true
  },
];

export const myClubMenuItems = [
  {
    title: 'Jugadores',
    description: 'Todos los jugadores que tienes en tu club.',
    icon: 'users',
    route: '/inicio/mi_club/jugadores'
  },
  {
    title: 'Opciones',
    description: 'Configuración del club.',
    icon: 'cog',
    route: '/inicio/mi_club/opciones'
  },
];

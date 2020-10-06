import AdminMenu from '../views/Admin/Menu/Menu';
import Permissions from '../views/Admin/Permissions/Permissions';
import Players from '../views/Admin/Players/Players';
import Countries from '../views/Admin/Countries/Countries';
import Leagues from '../views/Admin/Leagues/Leagues';
import CardsTypes from '../views/Admin/CardsTypes/CardsTypes';
import Teams from '../views/Admin/Teams/Teams';
import Cards from '../views/Admin/Cards/Cards';
import Packs from '../views/Admin/Packs/Packs';

export const routes = [
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
  {
    path: '/sobres',
    component: Packs
  },
];

export const adminMenuItems = [
  {
    title: 'Permisos',
    description: 'Permisos.',
    icon: 'chess',
    route: '/admin/permisos',
    admin:true
  },
  {
    title: 'Jugadores',
    description: 'Jugadores.',
    icon: 'user',
    route: '/admin/jugadores',
    admin:true
  },
  {
    title: 'Países',
    description: 'Países.',
    icon: 'flag',
    route: '/admin/paises',
    admin:true
  },
  {
    title: 'Ligas',
    description: 'Ligas.',
    icon: 'globe',
    route: '/admin/ligas',
    admin:true
  },
  {
    title: 'Tipos de cartas',
    description: 'Tipos de cartas.',
    icon: 'square',
    route: '/admin/tipos_cartas',
    admin:true
  },
  {
    title: 'Equipos',
    description: 'Equipos.',
    icon: 'shield alternate',
    route: '/admin/equipos',
    admin:true
  },
  {
    title: 'Cartas',
    description: 'Cartas.',
    icon: 'users',
    route: '/admin/cartas',
    admin:true
  },
  {
    title: 'Sobres',
    description: 'Sobres.',
    icon: 'square',
    route: '/admin/sobres',
    admin:true
  },
];
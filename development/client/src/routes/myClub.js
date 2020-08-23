import MyClubMenu from '../views/Game/MyClub/Menu/Menu';
import MyClubOptions from '../views/Game/MyClub/Options/Options';
import MyClubPlayers from '../views/Game/MyClub/Players/Players';

export const routes = [
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
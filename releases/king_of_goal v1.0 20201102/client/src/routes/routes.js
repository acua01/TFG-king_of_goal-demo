import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import CreateClub from '../views/CreateClub/CreateClub';
import GameLayout from '../views/Game/Game/Game';
import Admin from '../views/Admin/Admin/Admin';

export const routes = [
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
  {
    path: '/admin',
    component: Admin
  },
];

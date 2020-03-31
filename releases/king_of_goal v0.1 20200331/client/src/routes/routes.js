import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import MainMenu from '../views/MainMenu/MainMenu';

export const routes = [
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
    component: MainMenu
  }
];

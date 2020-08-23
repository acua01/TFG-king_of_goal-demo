import MainMenu from '../views/Game/MainMenu/MainMenu';
import Admin from '../views/Admin/Admin/Admin';
import MyClubLayout from '../views/Game/MyClub/MyClub/MyClub';

export const routes = [
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
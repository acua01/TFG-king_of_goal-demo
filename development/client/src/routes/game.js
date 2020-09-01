import MainMenu from '../views/Game/MainMenu/MainMenu';
import MyClubLayout from '../views/Game/MyClub/MyClub/MyClub';

export const routes = [
  {
    path: '/',
    component: MainMenu,
    exact:true
  },
  {
    path: '/mi_club',
    component: MyClubLayout
  },
];
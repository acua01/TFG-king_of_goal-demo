import MainMenu from '../views/Game/MainMenu/MainMenu';
import MyClubLayout from '../views/Game/MyClub/MyClub/MyClub';
import Shop from '../views/Game/Shop/Shop/Shop';
import Squads from '../views/Game/Squads/Squads/Squads';
import Draft from '../views/Game/Draft/Draft/Draft';

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
  {
    path: '/tienda',
    component: Shop
  },
  {
    path: '/plantillas',
    component: Squads
  },
  {
    path: '/draft',
    component: Draft
  },
];
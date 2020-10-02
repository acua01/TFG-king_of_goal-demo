export const sidebarItems = [
  {
    title: 'Ver jugadores',
    icon: 'users',
    route: '/inicio',
    enable: false
  },
  {
    title: 'Tienda',
    icon: 'shop',
    route: '/inicio',
    enable: false
  },
  {
    title: 'Plantillas',
    icon: 'sitemap',
    route: '/inicio/plantillas',
    enable: true
  },
  {
    title: 'Mi club',
    icon: 'trophy',
    route: '/inicio/mi_club',
    enable: true
  },
  {
    title: 'Administración',
    icon: 'chess king',
    route: '/inicio/admin',
    admin:true,
    enable: true
  },
];
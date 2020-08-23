export const mainMenuItems = [
  {
    title: 'Mercado',
    description: 'Aquí podrás ver la información de todos los jugadores.',
    icon: 'line graph',
    route: '/inicio',
    enable: false
  },
  {
    title: 'Tienda',
    description: 'Compra sobres para obtener jugadores.',
    icon: 'shop',
    route: '/inicio',
    enable: false
  },
  {
    title: 'Plantillas',
    description: 'Crea tus propias plantillas con tus jugadores.',
    icon: 'sitemap',
    route: '/inicio',
    enable: false
  },
  {
    title: 'Mi club',
    description: 'Aquí podrás ver tu club.',
    icon: 'trophy',
    route: '/inicio/mi_club',
    enable: true
  },
  {
    title: 'Administración',
    description: 'Administración.',
    icon: 'chess king',
    route: '/inicio/admin',
    admin:true,
    enable: true
  },
];
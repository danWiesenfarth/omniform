import {
  LayoutDashboard,
  Factory,
  Boxes,
  Wrench,
  ChartNoAxesCombined,
  UsersRound,
  Settings,
} from 'lucide-react';

export const ASIDE_ITEMS = [
  {
    id: 1,
    icon: LayoutDashboard,
    title: 'Dashboard',
    link: '/',
  },
  {
    id: 2,
    icon: Factory,
    title: 'Production',
    subpages: [
      { title: 'Production Order', link: '/production-order' },
      { title: 'Schedule', link: '/schedule' },
      { title: 'Work Orders', link: '/work-orders' },
      { title: 'Operation', link: '/operation' },
    ],
  },
  {
    id: 3,
    icon: Boxes,
    title: 'Materials',
    subpages: [
      { title: 'Material Overview', link: '/materials' },
      { title: 'Inventory', link: '/inventory' },
      { title: 'Material Movements', link: '/material-movements' },
      { title: 'Goods Receipt', link: '/goods-receipt' },
    ],
  },
  {
    id: 4,
    icon: Wrench,
    title: 'Maintenance',
    subpages: [
      { title: 'Maintenance Overview', link: '/maintenance' },
      { title: 'Maintenance Orders', link: '/maintenance-orders' },
      { title: 'Maintenance Schedule', link: '/maintenance-schedule' },
      { title: 'Equipment', link: '/equipment' },
    ],
  },
  {
    id: 5,
    icon: ChartNoAxesCombined,
    title: 'Analytics',
    subpages: [
      { title: 'Production Analytics', link: '/analytics/production' },
      { title: 'Performance', link: '/analytics/performance' },
      { title: 'Quality', link: '/analytics/quality' },
      { title: 'Reports', link: '/analytics/reports' },
    ],
  },
  {
    id: 6,
    icon: UsersRound,
    title: 'Admin',
    link: '/admin',
    dividerBefore: true,
  },
  {
    id: 7,
    icon: Settings,
    title: 'Settings',
    link: '/settings',
  },
];

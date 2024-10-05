export type TGlobalNavigationItem = {
  title: string;
  href?: string;
  children?: TGlobalNavigationItem[];
};

/**
 * This structure represents the global navigation menu.
 * Gets rendered in global-navigation and mobile-navigation.
 */
const GlobalNavigationItems: TGlobalNavigationItem[] = [
  {
    title: 'Overview',
    children: [
      {
        title: 'Something',
        href: '#',
      },
      {
        title: 'Something',
        href: '#',
      },
      {
        title: 'Something',
        href: '#',
      },
      {
        title: 'Something',
        href: '#',
      },
    ],
  },
  {
    title: 'Documentation',
    href: '#',
  },
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Assets',
    href: '#',
  },
  {
    title: 'Community',
    href: '/community',
  },
];

export default GlobalNavigationItems;

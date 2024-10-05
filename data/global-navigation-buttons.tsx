import IconArrowRight from '@/components/icons/icon-arrow-right';
import IconCode from '@/components/icons/icon-code';
import IconHeart from '@/components/icons/icon-heart';
import { TButtonVariant } from '@/components/ui/button/button';
import { ReactNode } from 'react';

export type TGlobalNavigationButton = {
  title: string;
  href?: string;
  icon?: ReactNode;
  variant?: TButtonVariant;
};

/**
 * This structure represents the global navigation buttons list.
 * Gets rendered in global-navigation and mobile-navigation.
 */
const GlobalNavigationButtons: TGlobalNavigationButton[] = [
  {
    title: 'Contribute',
    icon: <IconCode width={16} />,
  },
  {
    title: 'Donate',
    icon: <IconHeart width={16} />,
  },
  {
    title: 'Download',
    icon: <IconArrowRight width={16} />,
    variant: 'primary',
  },
];

export default GlobalNavigationButtons;

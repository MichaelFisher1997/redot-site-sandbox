import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './global-navigation.module.scss';
import TopBarLogoDark from '@/assets/branding/topbar-logo-dark.svg';
import MenuItemsRenderer from '@/components/common/global-navigation/menu-items-renderer/menu-items-renderer';

const GlobalNavigation: FC = () => {
  return (
    <div className={styles.globalNavigation}>
      <div className={styles.content}>
        <Link className={styles.itemWrapper} href="/">
          <Image src={TopBarLogoDark} alt="Redot Engine Logo" />
        </Link>
        <div className={styles.items}>
          <MenuItemsRenderer />
        </div>
      </div>
    </div>
  );
};

export default GlobalNavigation;

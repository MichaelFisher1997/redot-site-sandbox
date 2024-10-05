import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './global-navigation.module.scss';
import TopBarLogoDark from '@/assets/branding/topbar-logo-dark.svg';
import MenuItemsRenderer from '@/components/common/global-navigation/menu-items-renderer/menu-items-renderer';
import Button from '@/components/ui/button/button';
import GlobalNavigationButtons from '@/data/global-navigation-buttons';

const GlobalNavigation: FC = () => {
  return (
    <div className={styles.globalNavigation}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link className={styles.itemWrapper} href="/">
            <Image src={TopBarLogoDark} alt="Redot Engine Logo" />
          </Link>
          <div className={styles.items}>
            <MenuItemsRenderer />
          </div>
        </div>
        <div className={styles.buttons}>
          {GlobalNavigationButtons.map((button) => (
            <Link href="#" key={button.title}>
              <Button variant={button.variant}>
                {button.title}
                {button.icon}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalNavigation;

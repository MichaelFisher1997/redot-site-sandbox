import { FC } from 'react';
import styles from './splash.module.scss';
import MainOverlay from '@/app/(main)/_components/splash/main-overlay/main-overlay';
import IconChevronDown from '@/components/icons/icon-chevron-down';
import BackgroundView from '@/app/(main)/_components/splash/background-view/background-view';

const Splash: FC = () => {
  return (
    <div className={styles.splash}>
      <BackgroundView />

      <div className={styles.topFade} />
      <div className={styles.bottomFade} />

      <MainOverlay />

      <div className={styles.footer}>
        <IconChevronDown />
      </div>
    </div>
  );
};

export default Splash;

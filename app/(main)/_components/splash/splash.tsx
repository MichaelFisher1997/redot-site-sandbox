import { FC } from 'react';
import styles from './splash.module.scss';
import SplashImage from '@/assets/misc/splash.png';
import MainOverlay from '@/app/(main)/_components/splash/main-overlay/main-overlay';

const Splash: FC = () => {
  return (
    <div className={styles.splash}>
      <div
        className={styles.background}
        style={{
          background: `url(${SplashImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className={styles.topFade} />
      <div className={styles.bottomFade} />

      <MainOverlay />
    </div>
  );
};

export default Splash;

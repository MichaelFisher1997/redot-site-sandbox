import { FC } from 'react';
import styles from './background-view.module.scss';
import SplashImage from '@/assets/misc/splash.png';

/**
 * This component is essentially a complete placeholder.
 * This will be replaced with a video player and some additional logic.
 */
const BackgroundView: FC = () => {
  return (
    <>
      <div
        className={styles.background}
        style={{
          background: `url(${SplashImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div className={styles.footer}>
        <div className={styles.gameName}>Road to Vostok</div>
      </div>
    </>
  );
};

export default BackgroundView;

import { FC } from 'react';
import styles from './main-overlay.module.scss';
import SplashLogo from '@/assets/branding/splash-logo.svg';
import Image from 'next/image';
import Button from '@/components/ui/button/button';
import IconArrowRight from '@/components/icons/icon-arrow-right';
import Link from 'next/link';

const MainOverlay: FC = () => {
  return (
    <div className={styles.mainOverlay}>
      <Image src={SplashLogo} alt="Redot Engine Logo" />
      <div className={styles.textWrapper}>
        <div className={styles.title}>
          Open‑source game engine for everyone.
        </div>
        <div className={styles.subTitle}>No strings sttached.</div>
      </div>
      <Link href="#">
        <Button variant="primary">
          Download
          <IconArrowRight width={16} />
        </Button>
      </Link>
    </div>
  );
};

export default MainOverlay;

import { FC, PropsWithChildren } from 'react';
import styles from './menu-item.module.scss';
import Link from 'next/link';

interface IMenuItemsProps {
  href?: string;
}

const MenuItem: FC<PropsWithChildren<IMenuItemsProps>> = ({
  href,
  children,
}) => {
  return href ? (
    <Link href={href} className={styles.menuItem}>
      {children}
    </Link>
  ) : (
    <div className={styles.menuItem}>{children}</div>
  );
};

export default MenuItem;

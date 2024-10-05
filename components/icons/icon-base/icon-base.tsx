import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './icon-base.module.scss';
import cx from 'classix';

export interface IIconBaseProps {
  width?: number;
  height?: number;
}

const IconBase: FC<
  PropsWithChildren<IIconBaseProps & HTMLAttributes<HTMLElement>>
> = ({ children, width, height, className, ...props }) => {
  // calculate the icon size
  const defaultWidth = 24;
  const calculatedWidth = width || defaultWidth;
  const calculatedHeight = height || width;

  return (
    <div
      className={cx(styles.icon, className)}
      style={{ width: calculatedWidth, height: calculatedHeight }}
      {...props}
    >
      {children}
    </div>
  );
};

export default IconBase;

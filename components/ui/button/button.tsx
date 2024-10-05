import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './button.module.scss';
import cx from 'classix';

export type TButtonVariant = 'primary' | 'default';

interface IButtonProps {
  variant?: TButtonVariant;
  height?: number;
  fontSize?: number;
}

const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps>
> = ({ children, variant, height, fontSize, className, ...rest }) => {
  return (
    <button
      className={cx(
        styles.button,
        (variant === 'default' || !variant) && styles.default,
        variant === 'primary' && styles.primary,
        className
      )}
      style={{ height: height, fontSize: fontSize }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

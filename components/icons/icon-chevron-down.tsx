import IconBase, {
  IIconBaseProps,
} from '@/components/icons/icon-base/icon-base';
import { FC } from 'react';

const IconChevronDown: FC<IIconBaseProps> = (p) => (
  <IconBase {...p}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6.5L8 10.5L4 6.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </IconBase>
);

export default IconChevronDown;

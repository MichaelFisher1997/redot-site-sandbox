import IconBase, {
  IIconBaseProps,
} from '@/components/icons/icon-base/icon-base';
import { FC } from 'react';

const IconArrowRight: FC<IIconBaseProps> = (p) => (
  <IconBase {...p}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 8H2"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 4L14 8L10 12"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </IconBase>
);

export default IconArrowRight;

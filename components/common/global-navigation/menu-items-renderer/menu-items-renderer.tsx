import MenuItem from '@/components/common/global-navigation/menu-item/menu-item';
import IconChevronDown from '@/components/icons/icon-chevron-down';
import GlobalNavigationItems from '@/data/global-navigation-items';
import { FC } from 'react';

const MenuItemsRenderer: FC = () =>
  GlobalNavigationItems.map((item) => (
    <MenuItem key={item.title} href={item.href}>
      {item.title}
      {item.children?.length && <IconChevronDown width={16} />}
      {/* TODO: do popover rendering */}
    </MenuItem>
  ));

export default MenuItemsRenderer;

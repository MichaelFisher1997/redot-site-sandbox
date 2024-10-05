import GlobalNavigation from '@/components/common/global-navigation/global-navigation';
import { FC, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalNavigation />
      {children}
    </>
  );
};

export default MainLayout;

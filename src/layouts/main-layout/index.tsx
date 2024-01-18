import type { ChildrenProps } from '@/types';

import SlideBar from './slidebar';

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <SlideBar />
      {children}
    </>
  );
}

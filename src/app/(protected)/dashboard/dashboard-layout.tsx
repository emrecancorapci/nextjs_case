'use client';

import FlagContextProvider from '@/context/flag-context';

import Header from './_components/header';
import SidebarButton from './_components/sidebar-button';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-row rounded-lg border bg-background">
        <div className="w-1/6 border-e bg-background px-4 py-8">
          <h2 className="border-b-2 px-4 py-2 text-2xl font-bold text-primary">Projects</h2>
          <div className="py-4">
            <SidebarButton href="/dashboard/project/1">Project 1</SidebarButton>
          </div>
        </div>
        <div className="w-10/12 bg-primary-foreground">
          <FlagContextProvider>{children}</FlagContextProvider>
        </div>
      </div>
    </>
  );
}

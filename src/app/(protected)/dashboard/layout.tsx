'use client';

import FlagContextProvider from '@/context/flag-context';

import Header from './_components/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-row rounded-lg border bg-background">
        <div className="min-w-60 border-e bg-primary-foreground px-4 py-8">
          <h2 className="border-b-2 py-2 text-2xl font-bold text-primary">Projects</h2>
          <div className="py-4">
            <a
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded border-2 border-border bg-background p-2 text-lg font-semibold text-primary transition-colors duration-200 ease-in-out hover:bg-primary/10"
              href="/dashboard/project/1"
            >
              Project 1
            </a>
          </div>
        </div>
        <div className="w-full p-8">
          <FlagContextProvider>{children}</FlagContextProvider>
        </div>
      </div>
    </>
  );
}

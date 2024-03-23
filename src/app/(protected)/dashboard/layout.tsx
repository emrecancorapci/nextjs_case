'use client';

import FlagContextProvider from '@/context/flag-context';

import Header from './_components/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-row rounded-lg border bg-background py-10">
        <div className="min-w-40 px-4">
          <a
            className="flex w-full cursor-pointer flex-col items-center justify-center rounded border border-border p-2 text-lg font-semibold text-primary transition-colors duration-200 ease-in-out hover:bg-primary/10"
            href="/dashboard/project/1"
          >
            Project 1
          </a>
        </div>
        <div className="w-full">
          <FlagContextProvider>{children}</FlagContextProvider>
        </div>
      </div>
    </>
  );
}

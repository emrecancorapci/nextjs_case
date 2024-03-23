'use client';

import { CircleUserRoundIcon, LayoutDashboardIcon, LogOutIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import HeaderButton from './header-button';

export default function Header() {
  const session = useSession();

  return (
    <div className="flex w-full flex-row items-center justify-between bg-background px-8 py-2">
      <h1 className="text-2xl font-black text-primary">kargakarga</h1>
      <div className="flex items-baseline gap-4">
        <HeaderButton href="/dashboard">
          <LayoutDashboardIcon size={24} />
          Dashboard
        </HeaderButton>
        <HeaderButton href="/dashboard/profile">
          <CircleUserRoundIcon size={24} />
          Profile
        </HeaderButton>
        {session.status === 'authenticated' && (
          <HeaderButton onClick={() => signOut({ redirect: true })}>
            <LogOutIcon size={24} />
            Logout
          </HeaderButton>
        )}
      </div>
    </div>
  );
}

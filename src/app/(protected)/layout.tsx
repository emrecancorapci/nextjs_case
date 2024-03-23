'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push('/login');
    },
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

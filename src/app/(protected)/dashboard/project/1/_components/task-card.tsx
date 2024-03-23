import { useContext } from 'react';

import { FlagContext } from '@/context/flag-context';
import { ServerTask } from '@/types/types';

const flagStyle = (color?: string) => {
  if (color) return { color: color };
};

export default function TaskCard({ task }: { task: ServerTask }) {
  const flag = useContext(FlagContext).getFlag(task.flagId);
  return (
    <div className="rounded-xl border border-border bg-primary-foreground text-primary shadow-sm">
      <div className="flex w-full flex-row items-baseline justify-between rounded-t-xl border-b border-border bg-background px-4 py-2">
        <h3 className="text-lg font-bold">{task.name}</h3>
      </div>
      <div className="p-4">
        {task.description && <p>{task.description}</p>}
        <p>Code: {task.code}</p>
        <p>{task.deletedUserId}</p>
        <p>UserId: {task.createdUserId}</p>
      </div>
      <p className="w-full p-2 text-end" style={flagStyle(flag?.color)}>
        {flag?.name}
      </p>
    </div>
  );
}

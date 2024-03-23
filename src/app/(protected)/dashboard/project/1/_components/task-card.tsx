import { MoreHorizontalIcon, PlusIcon } from 'lucide-react';
import { useContext } from 'react';

import { FlagContext } from '@/context/flag-context';
import { ServerTask } from '@/types/types';

const flagStyle: (color?: string) => React.CSSProperties | undefined = (color?: string) => {
  if (color) return { color: color };
};

export default function TaskCard({ task }: { task: ServerTask }) {
  const flag = useContext(FlagContext).getFlag(task.flagId);
  return (
    <div className="rounded-xl border-2 border-border bg-primary-foreground text-primary shadow-sm">
      <div className="flex w-full flex-row items-center justify-between rounded-t-xl border-b border-border bg-background px-4 py-1">
        <h3 className="text-lg font-bold">{task.name}</h3>
        <div className="flex flex-row">
          <div className="rounded-lg p-2 hover:bg-primary-foreground">
            <PlusIcon size={18} />
          </div>
          <div className="rounded-lg p-2 hover:bg-primary-foreground">
            <MoreHorizontalIcon size={18} />
          </div>
        </div>
      </div>
      <div className="p-4">
        {task.description && <p>{task.description}</p>}
        <p>Code: {task.code}</p>
        <p>{task.deletedUserId}</p>
        <p>UserId: {task.createdUserId}</p>
      </div>
      <p className="w-full rounded-b-xl border-t bg-background px-4 py-1 text-end" style={flagStyle(flag?.color)}>
        {flag?.name}
      </p>
    </div>
  );
}

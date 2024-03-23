import { MoreHorizontalIcon, PlusIcon } from 'lucide-react';

interface Properties {
  name: string;
  tasksLength: number;
  isOpen: boolean;
  isComplete: boolean;
}

export default function BoardHeader({ name, tasksLength, isOpen, isComplete }: Properties) {
  return (
    <div className="flex items-center justify-between border-b p-2 ps-4 shadow ">
      <div className="flex flex-row items-center gap-2">
        <h2 className="text-xl font-light">{name}</h2>
        <p className="pointer-events-none rounded-full border-2 border-border bg-background px-2 py-1.5 text-sm leading-none text-primary">
          {tasksLength}
        </p>
        <div className="flex items-center gap-4">
          {isOpen ? (
            <p className="pointer-events-none rounded-2xl bg-yellow-100 px-2 py-0.5 text-sm text-yellow-800 hover:bg-background">
              Open
            </p>
          ) : (
            <></>
          )}
          <p>
            {isComplete ? (
              <p className="pointer-events-none rounded-2xl bg-green-100 px-2 py-0.5 text-sm text-green-800 hover:bg-background">
                Completed
              </p>
            ) : (
              <></>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="rounded-lg bg-background p-2 hover:bg-primary/10">
          <PlusIcon size={18} />
        </div>
        <div className="rounded-lg bg-background p-2 hover:bg-primary/10">
          <MoreHorizontalIcon size={18} />
        </div>
      </div>
    </div>
  );
}

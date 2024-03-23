import { Board } from '@/types/types';

import TaskCard from './task-card';

const ascendingOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export default function SingleBoard({ board }: { board: Board }) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-border bg-primary-foreground text-primary">
      <div className="flex items-baseline justify-between border-b p-4">
        <h2 className="text-xl font-bold">{board.name}</h2>
        <div className="flex gap-4">
          {board.openAction ? (
            <p className="rounded-2xl bg-yellow-100 px-2 py-1 text-sm text-yellow-800">Open</p>
          ) : (
            <></>
          )}
          <p>
            {board.completeAction ? (
              <p className="rounded-2xl bg-green-100 px-2 py-1 text-sm text-green-800">Completed</p>
            ) : (
              <></>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 rounded-b-lg bg-background p-4">
        {board.tasks.sort(ascendingOrder).map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

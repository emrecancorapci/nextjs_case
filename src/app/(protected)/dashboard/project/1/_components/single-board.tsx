import { Board } from '@/types/types';

import BoardHeader from './board-header';
import NoTask from './no-task';
import TaskCard from './task-card';

const ascendingOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export default function SingleBoard({ board }: { board: Board }) {
  return (
    <div className="flex w-full min-w-80 flex-col rounded-lg border border-border bg-background text-primary">
      <BoardHeader
        name={board.name}
        tasksLength={board.tasks.length}
        isOpen={board.openAction}
        isComplete={board.completeAction}
      />
      <div className="flex h-full flex-1 flex-col rounded-b-lg bg-background shadow-inner">
        {board.tasks.length > 0 ? (
          <div className="flex flex-col gap-4 p-2 pt-4">
            {board.tasks.sort(ascendingOrder).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <NoTask />
        )}
      </div>
    </div>
  );
}

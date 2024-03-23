import { Board } from '@/types/types';

import BoardHeader from './board-header';
import NoTask from './no-task';
import TaskCard from './task-card';

const ascendingOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export default function SingleBoard({ board }: { board: Board }) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-border bg-primary-foreground text-primary">
      <BoardHeader
        name={board.name}
        tasksLength={board.tasks.length}
        isOpen={board.openAction}
        isComplete={board.completeAction}
      />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-b-lg bg-background p-4 shadow-inner">
        {board.tasks.length > 0 ? (
          board.tasks.sort(ascendingOrder).map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <NoTask />
        )}
      </div>
    </div>
  );
}

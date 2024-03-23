import { PlusIcon } from 'lucide-react';

export default function NoTask() {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl p-8 hover:bg-primary/10">
        <PlusIcon size={48} />
        <p className="text-2xl font-bold">Add Task</p>
      </div>
    </div>
  );
}

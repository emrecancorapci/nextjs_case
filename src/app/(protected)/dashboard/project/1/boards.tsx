'use client';

import axios from 'axios';
import { PlusIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { ServerResponse } from '@/types/response';
import { Board } from '@/types/types';

import SingleBoard from './_components/single-board';

const ascendingOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export default function Boards() {
  const [boards, setBoards] = useState<Board[] | undefined>();
  const { data } = useSession();

  useEffect(() => {
    const url = `https://api.management.parse25proje.link/api/boards`;

    if (data == undefined) return;

    axios
      .get<ServerResponse<Board[]>>(url, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then(({ data }) => {
        if (data.status === true) setBoards(data.data);
      })
      .catch((error) => console.error(error));
  }, [setBoards, data]);

  return (
    <div className="flex size-full flex-col overflow-hidden">
      <h2 className="px-6 pt-6 text-2xl font-light text-primary">Project 1</h2>
      <div className="flex w-full flex-1 gap-4 overflow-x-scroll p-6">
        {boards == undefined ? (
          <>No Board</>
        ) : (
          boards.sort(ascendingOrder).map((board) => <SingleBoard key={board.id} board={board} />)
        )}
        <button className="flex min-w-80 flex-col items-center justify-center rounded-lg border-2 border-border bg-background pt-8 text-2xl font-light text-primary hover:bg-primary/10">
          <PlusIcon size={48} />
          Add Board
        </button>
      </div>
    </div>
  );
}

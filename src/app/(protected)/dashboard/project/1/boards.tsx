'use client';

import axios from 'axios';
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
    <div className="flex size-full flex-1 gap-4">
      {boards == undefined ? (
        <>No Board</>
      ) : (
        boards.sort(ascendingOrder).map((board) => <SingleBoard key={board.id} board={board} />)
      )}
    </div>
  );
}

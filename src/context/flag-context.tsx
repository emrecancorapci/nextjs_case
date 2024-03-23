/* eslint-disable unicorn/no-useless-undefined */
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { createContext, type Dispatch, type SetStateAction, useEffect, useMemo, useState } from 'react';

import { ServerResponse } from '@/types/response';
import { Flags } from '@/types/types';

export const FlagContext = createContext<{
  getFlag: (id: number) => Flags | undefined;
}>({
  getFlag: () => undefined,
});

export default function FlagContextProvider({ children }: { children: React.ReactNode }) {
  const [flags, setFlags] = useState<Flags[]>();
  const { data } = useSession();

  useEffect(() => {
    const url = `https://api.management.parse25proje.link/api/commons/flags`;

    if (data == undefined) return;

    axios
      .get<ServerResponse<Flags[]>>(url, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then(({ data }) => {
        if (data.status === true) setFlags(data.data);
      })
      .catch((error) => console.error(error));
  }, [setFlags, data]);

  const memoizedValue = useMemo(
    () => ({
      getFlag: (id: number) => {
        if (flags == undefined) return;

        return flags.find((flag) => flag.id === id);
      },
    }),
    [flags],
  );

  return <FlagContext.Provider value={memoizedValue}>{children}</FlagContext.Provider>;
}

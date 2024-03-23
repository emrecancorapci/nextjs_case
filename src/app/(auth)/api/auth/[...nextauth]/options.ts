/* eslint-disable unicorn/no-null */
import type { DefaultSession, NextAuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { ServerResponse } from '@/types/response';
import { LoginData } from '@/types/types';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
  }
}

const config: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email:',
          type: 'text',
          placeholder: 'email',
        },
        password: {
          label: 'Password:',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        const authResponse = (await fetch(`${process.env.API_URI}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json())) as ServerResponse<LoginData>;

        if (authResponse.status === false) return null;

        const user: User = {
          id: String(authResponse.data.id),
          email: authResponse.data.email,
          name: authResponse.data.fullName,
          image: authResponse.data.token,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (!session.user?.image) return session;

      session.accessToken = session.user.image;
      session.user.image = undefined;

      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    newUser: '/dashboard',
  },
};

export default config;

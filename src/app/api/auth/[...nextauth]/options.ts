import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

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

      // @ts-expect-error - This is a valid config
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return;
        const { email, password } = credentials;

        const authResponse = (await fetch(`${process.env.API_URI}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json())) as LoginResponse | ErrorResponse;

        if (authResponse.status === false) throw new Error(authResponse.message);

        return authResponse.data;
      },
    }),
  ],

  pages: {
    signIn: '/login',
    signOut: '/logout',
    newUser: '/dashboard',
  },
};

export default config;

interface LoginResponse {
  status: true;
  data: {
    id: number;
    fullName: string;
    email: string;
    token: string;
  };
}

interface ErrorResponse {
  status: false;
  message: string;
}

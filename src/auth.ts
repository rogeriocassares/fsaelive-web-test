import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import type { Provider } from "next-auth/providers"
import { NextResponse } from 'next/server';

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

const providers: Provider[] = [
    MicrosoftEntraID({
    clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
    clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
    issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
  }),
  GitHub,
  Google,
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")


  const publicRoutes = [
    { path: '/', whenAuthenticated: 'next' },
    { path: '/live', whenAuthenticated: 'next' },
    { path: '/results', whenAuthenticated: 'next' },
    { path: '/newsletter', whenAuthenticated: 'next' },
    { path: '/content', whenAuthenticated: 'next' },
    { path: '/about', whenAuthenticated: 'next' },
    { path: '/login', whenAuthenticated: 'redirect' },
  ] as const

  const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'


export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {

      const isLoggedIn = !!auth?.user;
      const path = nextUrl.pathname
      const publicRoute = publicRoutes.find(route => route.path === path)

      if (!isLoggedIn && publicRoute) {
          return NextResponse.next()
        }

        if (!isLoggedIn && !publicRoute) {
          const redirectUrl = nextUrl.clone()
          redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
          return NextResponse.redirect(redirectUrl)
        }

        if (isLoggedIn && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
          const redirectUrl = nextUrl.clone()
          redirectUrl.pathname = '/dashboard'
          return NextResponse.redirect(redirectUrl)
        }

        if (isLoggedIn && !publicRoute) {
          return NextResponse.next()
        }

      return true;
    },
  },

  providers,
  pages: {
    signIn: "/login",
  },
})
import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // TODO: Add providers here
    // e.g., import GitHub from "next-auth/providers/github"
    // GitHub({ clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET })
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
});

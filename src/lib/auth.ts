import { SupabaseAdapter } from "@auth/supabase-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import jwt from "jsonwebtoken";
export const authOptions:  NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    
        }),
    ],

    adapter: SupabaseAdapter({
        // @ts-ignore - this is a valid option, but not in the types
        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        // @ts-ignore - this is a valid option, but not in the types
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
    }),
    callbacks: {
        async session({ session, user }) {
          const signingSecret = process.env.SUPABASE_JWT_SECRET
          if (signingSecret) {
            const payload = {
              aud: "authenticated",
              exp: Math.floor(new Date(session.expires).getTime() / 1000),
              sub: user.id,
              email: user.email,
              role: "authenticated",
            }
            session.supabaseAccessToken = jwt.sign(payload, signingSecret)
          }
          return session
        },
    },
}



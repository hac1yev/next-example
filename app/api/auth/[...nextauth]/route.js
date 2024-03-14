import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { connectToDB } from "@/lib/connectToDB";
import { User } from "@/lib/models";

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectToDB();

        const user = await User.find({ username: credentials.username });
        
        const passwordIsCorrect = await compare(credentials.password || "", user[0].password);

        if(passwordIsCorrect){
          return {
            id: user[0]._id,
            username: user[0].username
          }
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
      }
      return session;
    },
  }
});

export {handler as GET, handler as POST}
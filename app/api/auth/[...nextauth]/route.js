import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Tu UserName" },
        password: { label: "Password", type: "password", placeholder: "********" }
      },
      async authorize(credentials, req) {
        const userFound = await prisma.Asesorado.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (!userFound) throw new Error("Usuario/Password No Encontrado");

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

        if (!matchPassword) throw new Error("Usuario/Password No Encontrado");


        return {
            userId: userFound.id,
            name: userFound.username,
            email: userFound.email,
            role: userFound.role
            };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
import NextAuth from "next-auth/next";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({session}) {
      const sessionUser = await User.findOne({email: session.user.email});
      if(sessionUser) {
        session.user.id = sessionUser._id.toString();
      }
      return session;
    },
    async signIn({profile}) {

      try{
        const gProfile = profile as GoogleProfile;
        await connectToDatabase();
        
        const userExists = await User.findOne({
          email: gProfile.email
        });
        if(!userExists) {
          await User.create({
            email: gProfile.email,
            username: gProfile.name?.replaceAll(" ", "").toLowerCase(),
            image: gProfile.picture
          });
        }
        return true;
      }catch(error) {
        console.log(error);
        return false;
      }

    }
  }
})

export {handler as GET, handler as POST}
import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler= NextAuth({
    providers: [
        // OAuth authentication providers...
        GithubProvider({
            clientId:Ov23limv2SK3iEIz6oNS,
            clientSecret:fab9235a279b480270c861c78b2adf098f7eb289,
        }),
    ]
})
export {handler as GET , handler as POST};

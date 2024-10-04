"use client"
import { SessionProvider } from "next-auth/react"

const SessionWrapper=({ children }) =>{
  return(
    <SessionProvider>
          {children}
    </SessionProvider>
  )
}

export default SessionWrapper;
// "use client"
// import SessionProvider from "next-auth/react"
// function AuthProvider({children}) {
//   return <SessionProvider>
//     {children}
//   </SessionProvider>;
// }

// export default AuthProvider;

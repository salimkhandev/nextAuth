"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session ,status} = useSession()
  // console.log(session.user);
  
  console.log(session);
  console.log(status);
  if (status==='loading') {
    return <>
    <p>Loading...</p>
    </>
  }
  if (session) {
    return <>
      Signed in as {session.user.email} <br />    {session.user.name} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn("github")}>Sign in with github</button> <br />
    Not signed in <br />
    <button onClick={() => signIn("google")}>Sign in with google</button> <br />
  </>
}


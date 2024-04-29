"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button onClick={() => signOut()}>signout</button>
      </>
    );
  }
  return (
    <>
      not signed in <br />
      <button onClick={() => signIn()}>signin</button>
    </>
  );
}

export default function Nav() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}

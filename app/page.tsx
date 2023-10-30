"use client"

import { useEffect } from "react";
import { redirect } from 'next/navigation'
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spinner } from "@material-tailwind/react";

const Home = () => {
  const { user, error, isLoading } = useUser()
  useEffect(() => {
    if (!isLoading) {
      if (!isLoading && user) {
        redirect('/landingPage')
      }
      else { redirect('/register') }
    }
  }, [user, isLoading])


  return (
    <main className={`flex flex-1 flex-col items-center place-content-center overflow-auto`}>
      <Spinner color="amber" className="h-12 w-12" />
      <b className="text-Cabin text-amber-500 text-[20px]">Loading...</b>
    </main>
  )
}
export default Home

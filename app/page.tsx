"use client"
import { useFormik } from "formik";
import { LoginCard } from "./components";
import { useEffect } from "react";
import { redirect } from 'next/navigation'
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {
  const { user, error, isLoading } = useUser()
  console.log({ user })
  useEffect(() => {
    if (!isLoading && user) {
      redirect('/landingPage')
    }
  }, [user, isLoading])
  const formik = useFormik<LoginFormProps>({
    validateOnBlur: true,
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sub: false,
    },
    validate: (data) => {
      let errors: Partial<Record<keyof LoginFormProps, string>> = {}
      errors = { ...errors, ...!data.email ? { 'email': 'Field required' } : {} }
      errors = { ...errors, ...!data.firstName ? { 'firstName': 'Field required' } : {} }
      errors = { ...errors, ...!data.lastName ? { 'lastName': 'Field required' } : {} }
      errors = { ...errors, ...!data.password ? { 'password': 'Field required' } : {} }

      return errors
    },
    onSubmit: (data) => {

    },
  })

  return (
    <main className={`flex  flex-col items-center overflow-auto`}>
      <LoginCard {...{ formik }} />
    </main>
  )
}
export default Home

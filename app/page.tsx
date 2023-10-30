"use client"
import { useFormik } from "formik";
import { LoginCard } from "./components";

export default function Home() {

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
    onSubmit: (data) => { },
  })

  return (
    <main className={`flex  flex-col items-center overflow-auto`}>
      <LoginCard {...{ formik }} />
    </main>
  )
}

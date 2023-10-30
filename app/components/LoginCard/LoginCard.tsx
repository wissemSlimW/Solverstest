import { ConnectButton } from "../";
import { Facebook, Google, Twitter } from "../../icons";
import { LoginForm } from "../";
import { FormikProps } from "formik";
import Link from "next/link";
export const LoginCard = ({ formik }: { formik: FormikProps<LoginFormProps> }) => {
    return (
        <div className='flex w-11/12 md:w-10/12 lg:w-8/12 rounded-[14px] my-[47px] bg-white'>
            <div className="w-full xl:w-8/12 2xl:w-7/12 flex flex-col px-10 py-7">
                <h1 className=" font-Cabin text-[34px]">Create an account</h1>
                <span className="text-[#4c4d4f80] text-[14px] pt-[14px] pb-[39px]">
                    Already have an account?
                    <Link href='/api/auth/login'><span className="text-[#4C4D4F]"> Log in</span></Link>
                </span>
                <span className="mb-[10px]"><ConnectButton icon={<Facebook />} text="Continue with Facebook" /></span>
                <span className="mb-[10px]"><ConnectButton icon={<Google />} text="Continue with Google" /></span>
                <span className="mb-6"><ConnectButton icon={<Twitter />} text="Continue with Twitter" /></span>
                <span className="flex gap-2 place-items-center text-[#4C4D4F80] pb-14">
                    <span className="border-[1px] border-solid border-[#4C4D4F80] h-0 w-full"></span>
                    Or
                    <span className="border-[1px] border-solid border-[#4C4D4F80] h-0 w-full"></span>
                </span>
                <LoginForm {...{ formik }} />
            </div>
            <div className=" w-0 xl:w-4/12 2xl:w-5/12 overflow-hidden relative rounded-ee-[14px] rounded-se-[14px]">
                <img className="object-cover h-full w-full absolute inset-0 " src='/loginBackground.png'></img>
            </div>
        </div>
    )
}

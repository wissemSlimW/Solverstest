import Link from "next/link";

export const Header = () => {
  return <header className="bg-white h-20 w-full flex place-items-center place-content-center 
   text-center">
    <Link href={'/api/auth/login'}><h1 className="text-[34px] text-[#4C4D4F]">AI Ignition</h1></Link>
  </header>;
};

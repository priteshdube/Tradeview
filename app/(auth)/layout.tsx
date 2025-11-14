import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
       <main className="auth-layout">
       
            <Link href="/" className="auth-logo ml-5 mt-5" >
                <Image src="/assets/icons/logo.png" alt="Tradeview Logo" width={100} height={9} className=" h-10 w-auto cursor-pointer" />
            </Link>

            <div className="pb-6 lg:w-full mx-20 m-auto">
                {children}
            </div>
        

       </main>
    );
};

export default layout;

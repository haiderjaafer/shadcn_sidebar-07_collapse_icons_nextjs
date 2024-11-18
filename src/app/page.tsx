
import {FormUser} from "@/components/context-component/FormUser";
import UserCheck from "@/components/context-component/UserCheck";
import { UserContextProvider } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
 {/* <h1>welcome to React nextjs</h1>
 <div className="flex flex-row items-center space-x-4">
  <UserContextProvider>
<FormUser/>
<UserCheck/>
</UserContextProvider>
 </div> */}

<h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance ">
        Complete Guide on how to Use Redux Toolkit in Next Js with Typescript
      </h1>
      <ul className="text-xl my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Installation and Setup </li>
        <li>
          <Link href="/counter">Implement Counter with Redux</Link>
        </li>
        <li>
          <Link href="/shop">Implement Cart Functionality with Redux</Link>
        </li>
        <li>
          <Link href="/form">Implement Multi step form with Redux</Link>
        </li>
      </ul>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

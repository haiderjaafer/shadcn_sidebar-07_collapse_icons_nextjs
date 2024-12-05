'use client'

import {FormUser} from "@/components/context-component/FormUser";
import UserCheck from "@/components/context-component/UserCheck";
import { TestSelector } from "@/components/Test_Selector";
import { UserContextProvider } from "@/context/UserContext";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const baseURL = `localhost:3000/api/generateQRcode?empNo=${8880}`;
  const qrCode = "data:image/png;base64,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";

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

      <TestSelector/>
      
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

      
     {/* <Link href='localhost:3000' target="_blank"> click here </Link> */}

     <button type="button" onClick={() => router.push('http//localhost:3000/api/generateQRcode')}>
      Dashboard
    </button>
     
     <Image 
        aria-hidden
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAALUSURBVO3BQa7jSAwFwXyE7n/lHC+5ElCQbPTnMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+CWVE0noVLokdCpdEn5J5YlijVKsUYo1ysXLVN6UhDtJ6FQ6lTepvCkJbyrWKMUapVijXHxZEk6onFDpktCpdEnoVJ5IwgmVbyrWKMUapVijXAyjciIJncpfVqxRijVKsUa5+OOScEfl/6RYoxRrlGKNcvFlKt+k0iWhS8IdlSdU/iXFGqVYoxRrlIuXJeGXktCpdEnoVLokdCp3kvAvK9YoxRqlWKPEDwZLQqcyWbFGKdYoxRrl4qEkdCpdEjqVLgmdSpeETuVNSehUTiShU7mThE7lTcUapVijFGuUi4dU7qh0SehUuiR0KneS0KncSUKn0iWhU+mS0Kl0SehUfqlYoxRrlGKNcvFQEk6onEjCiSS8KQknVLok/FKxRinWKMUaJX7wQBK+SeVEEjqVLgknVLoknFD5pWKNUqxRijXKxctU7iShU7mThE7ljsoJlS4JXRLuqNxJwgmVJ4o1SrFGKdYo8YM/LAl3VJ5IQqdyIgknVJ4o1ijFGqVYo8QPHkjCL6m8KQmdyokkdConktCpPFGsUYo1SrFGuXiZypuScCIJd1Q6lTtJ6FQ6lTtJ6FQ6lTcVa5RijVKsUS6+LAknVE4k4YkkdConktCpnEhCp/JEsUYp1ijFGuXij1PpktCpdEnoVLokdCpdEjqVLgmdSpeETuVNxRqlWKMUa5SLPy4J35SEJ5LQqXRJ6FSeKNYoxRqlWKNcfJnKN6ncScKdJNxR6ZLQJeGOyh2VNxVrlGKNUqxR4gcPJOGXVLokdCp3ktCpdEk4odIl4Y5Kl4RO5YlijVKsUYo1SvxgjVGsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5T/ADHXLePE7VIbAAAAAElFTkSuQmCC"
        alt="File icon"
        width={200}
        height={200}
        
      
      />
     
     




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

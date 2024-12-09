'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import { Input } from '../ui/input';
import{Search} from "lucide-react";

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const debounce = useDebounceCallback(handleSearchTitle, 500);
  const empNo = searchParams.get('empNo') ?? '';
  const { replace } = useRouter();


  function handleSearchTitle(value: string) {
    const sp = new URLSearchParams(searchParams);
    if (value.trim() === '') {
      sp.delete('empNo');
    } else {
      sp.set('empNo', value);
    }
   // router.push(`${pathname}?${sp.toString()}`);
   replace(`${pathname}?${sp.toString()}`);
  }

  return (
    <div className="relative flex flex-1 my-2">
    <Input
      placeholder='Search title here...'
      className='w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm '
      onChange={e => debounce(e.target.value)}
      defaultValue={empNo}
    />
     <Search className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
}
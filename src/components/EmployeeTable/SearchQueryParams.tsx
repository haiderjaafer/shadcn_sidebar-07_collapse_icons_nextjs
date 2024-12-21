"use client";


import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    // console.log(term);
    const params = new URLSearchParams(searchParams);
   // params.set("page", "1");
    if (term) {
      params.set("empNo", term);
    } else {
      params.delete("empNo");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border placeholder:text-black  text-right outline-none pr-3 text-white border-gray-200 py-3 px-4  text-sm outline-2 rounded-lg bg-slate-500 "
        placeholder="رقم الحاسبة"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("empNo")?.toString()}
      />
     
    </div>
  );
};

export default Search;
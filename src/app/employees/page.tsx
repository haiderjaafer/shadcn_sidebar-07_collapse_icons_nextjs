
import { EmployeesTableServer } from "@/components/EmployeeTable/EmployeesTableServer";
import Pagination from "@/components/EmployeeTable/Pagination";
import Search from "@/components/EmployeeTable/SearchQueryParams";
import { TableSkeleton } from "@/components/EmployeeTable/TableSkeleton";
import { SearchBar } from "@/components/searchParamsExample/searchbar";
import { getUsersPages } from "@/lib/data";
import { Suspense } from "react";



const EmployeeTable = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    empNo?: string;
  };
}) => {
  // Await searchParams before using its properties
  const empNo = searchParams?.empNo || "";
  const currentPage = Number(( searchParams?.page) || 1);


  const totalPages = await getUsersPages(empNo);

console.log("totalPages",totalPages);

    return (
      <div className="max-w-screen-2xl mx-auto mt-5  ">
        <div className="flex   justify-end  gap-1 mb-3 ">
        <div> <Search /></div>
        
        </div>
        
        <Suspense  fallback={<TableSkeleton />}>
          <EmployeesTableServer
          
            empNo={empNo}
            currentPage={currentPage}
             />
        </Suspense>



        <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
      
      </div>
    );
  };

  export default EmployeeTable;
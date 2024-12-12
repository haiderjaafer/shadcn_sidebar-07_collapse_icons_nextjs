
import { EmployeesTable } from "@/components/EmployeeTable/EmployeeTableComponent";
import Search from "@/components/EmployeeTable/SearchQueryParams";
import { TableSkeleton } from "@/components/EmployeeTable/TableSkeleton";
import { SearchBar } from "@/components/searchParamsExample/searchbar";
import { Suspense } from "react";

const EmployeeTable = async ({
    searchParams,
  }: {
    searchParams?: {
     // query?: string;
      page?: string;
      empNo?:string;
    };
  }) => {
   // const query = searchParams?.empNo || "";
   const empNo = searchParams?.empNo || "";
    const currentPage = Number(searchParams?.page) || 1;
  
    //const totalPages = await getContactPages(query);
  
    return (
      <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex items-center justify-between gap-1 mb-5">
        <div> <Search /></div>
        
        </div>
        {/* <Suspense key={query + currentPage} fallback={<TableSkeleton />}> */}
        <Suspense key={empNo   + currentPage} fallback={<TableSkeleton />}>
          <EmployeesTable
          // query={query}
          empNo={empNo}
            currentPage={currentPage}
             />
        </Suspense>
        {/* <div className="flex justify-center mt-4">
          <Pagination totalPages={totalPages} />
        </div> */}
      </div>
    );
  };

  export default EmployeeTable;
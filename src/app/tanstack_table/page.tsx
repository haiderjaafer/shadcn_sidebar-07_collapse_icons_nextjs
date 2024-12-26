import { TableSkeleton } from "@/components/EmployeeTable/TableSkeleton";
import UsersTanstackTableServer from "@/components/tanStackDataTable/tanstack_TableServer";
import { Suspense } from "react";




const UsersTableDataAppRoute = async ({
  searchParams,
}: {
  searchParams?: {
    
    empNo?: string;
  };
}) => {
  // Await searchParams before using its properties
  const empNo = searchParams?.empNo || "";




    return (
      <div className="max-w-screen-2xl mx-auto mt-5  ">
   
        
        <Suspense  fallback={<TableSkeleton />}>
          <UsersTanstackTableServer
          
            empNo={empNo}
           
             />
        </Suspense>



     
      
      </div>
    );
  };

  export default UsersTableDataAppRoute;
import { DataTable } from "@/components/tanStackDataTable";
import { columns } from "@/components/tanStackDataTable/columns";
import { projects } from "@/components/tanStackDataTable/data";




const IndexPage = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      {/* <TopHeader /> */}
      <DataTable data={projects} columns={columns} />
    </div>
  );
};

export default IndexPage;
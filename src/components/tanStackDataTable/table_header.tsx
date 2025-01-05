import { Table } from "@tanstack/react-table";

import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    getPaginationRowModel,
    PaginationState,
  } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
  interface TableHeaderProps<TData> {
    table: Table<TData>;
    onHeaderClick?: (columnId: string) => void; // Only columnId, no event
  }
  
  const  TableHeader = <TData,>({ table, onHeaderClick }: TableHeaderProps<TData>) => {
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        // This runs only on the client after the first render
        setIsClient(true);
      }, []);
    
      if (!isClient) {
        return null; // Optionally render a loading state or nothing during SSR
      }


    return(
      <thead className="bg-black ">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className="p-2 text-sm font-bold text-gray-500 ">
              {header.isPlaceholder ? null : (
                <Button
                  asChild
                  
                  variant="ghost"
                  className="text-left hover:text-white bg-black"
                  onClick={() => {
                    if (onHeaderClick) {
                      onHeaderClick(header.column.id);
                    }
                  }}
                >
                  
                  {typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header({
                        column: header.column,
                        header: header,
                        table: table,
                      })
                    : header.column.columnDef.header}
                </Button>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    
  )};
  
  export default  TableHeader;
  
  


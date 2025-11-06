import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

import data from "/MOCK_DATA";
import { GlobalFilterColumnsDef } from "./columns/GlobalFilterColumnsDef";
import { useState } from "react";
function GlobalFiltering() {
  const [globalFilter, setGlobalFilter] = useState("");

  // creating a table instace
  const tableInstance = useReactTable({
    data: data,
    columns: GlobalFilterColumnsDef,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <>
      <input
        type="text"
        className="px-2.5 py-2 border mb-2 border-neutral-900 ml-2.5 w-100"
        placeholder="Enter the text here"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table className="border w-full border-gray-400">
        <thead className="">
          {tableInstance.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="px-2 py-1 border font-semibold  text-red-500"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="font-inter">
          {tableInstance.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border text-center px-4  py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GlobalFiltering;

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { finalProjectColumnDef } from "./finalProjectColumnDef";

import data from "/MOCK_DATA";
function FinalProjectTable() {
  const tableInstance = useReactTable({
    data,
    columns: finalProjectColumnDef,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-300 w-300  mx-auto">
      <h1 className="font-inter">Admin Table</h1>
      <table className="w-full mt-10 border border-border">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="border border-border px-2 py-2.5 font-syne text-sm"
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
        <tbody className="divide-y divide-border">
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="py-2.5 text-center ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FinalProjectTable;

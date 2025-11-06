import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import data from "/MOCK_DATA";
import { ColumnFilteringColumnDef } from "./columns/ColumnFilteringColumnDef";
import { useState } from "react";

function ColumnFiltering() {
  const [columnsFilters, setColumnFiltering] = useState([]);

  // creating a table instace
  const tableInstance = useReactTable({
    data: data,
    columns: ColumnFilteringColumnDef,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters: columnsFilters,
    },
    onColumnFiltersChange: setColumnFiltering,
  });

  return (
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

                    {header.column.getCanFilter() ? (
                      <input
                        type="text"
                        placeholder={`Filter...`}
                        value={header.column.getFilterValue() ?? ""}
                        onChange={(e) =>
                          header.column.setFilterValue(e.target.value)
                        }
                        className="mt-1 w-full border px-1 py-0.5 text-sm"
                      />
                    ) : null}
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
  );
}

export default ColumnFiltering;

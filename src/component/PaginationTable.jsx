import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import data from "/MOCK_DATA";
import { PaginationColumnDef } from "./columns/PaginationColumnDef";
import { useState } from "react";

function PaginationTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // creating a table instace
  const tableInstance = useReactTable({
    data: data,
    columns: PaginationColumnDef,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <>
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

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button
            onClick={() => tableInstance.setPageIndex(0)}
            disabled={!tableInstance.getCanPreviousPage()}
            className="px-3 py-1 border rounded"
          >
            ⏮ First
          </button>
          <button
            onClick={() => tableInstance.previousPage()}
            disabled={!tableInstance.getCanPreviousPage()}
            className="px-3 py-1 border rounded"
          >
            ◀ Prev
          </button>
          <button
            onClick={() => tableInstance.nextPage()}
            disabled={!tableInstance.getCanNextPage()}
            className="px-3 py-1 border rounded"
          >
            Next ▶
          </button>
          <button
            onClick={() =>
              tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
            }
            disabled={!tableInstance.getCanNextPage()}
            className="px-3 py-1 border rounded"
          >
            Last ⏭
          </button>
        </div>
        <span>
          Page{" "}
          <strong>
            {tableInstance.getState().pagination.pageIndex + 1} of{" "}
            {tableInstance.getPageCount()}
          </strong>
        </span>
        <select
          value={tableInstance.getState().pagination.pageSize}
          onChange={(e) => tableInstance.setPageSize(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default PaginationTable;

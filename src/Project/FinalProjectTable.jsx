import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { finalProjectColumnDef } from "./finalProjectColumnDef";
import data from "/MOCK_DATA";
import { useState } from "react";

function FinalProjectTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilterState, setGlobalFilter] = useState("");
  const tableInstance = useReactTable({
    data,
    columns: finalProjectColumnDef,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination: pagination,
      globalFilter: globalFilterState,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
  });

  return (
    <div className="max-w-300 w-300  mx-auto">
      <h1 className="font-inter text-end">Admin Table</h1>
      <div>
        <input
          type="text"
          className="border-border w-100 border px-1.5 py-2 font-inter text-xs"
          placeholder="Filter Products"
          value={globalFilterState}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <table className="w-full mt-3 border border-border">
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
                    <td
                      key={cell.id}
                      className="py-2.5 text-center font-inter text-xs"
                    >
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

      <div className="w-full py-5 flex items-center justify-end">
        <div className="flex gap-2.5 font-syne border-border">
          <div className="flex gap-2">
            <button
              onClick={() => tableInstance.setPageIndex(0)}
              disabled={!tableInstance.getCanPreviousPage()}
              className="px-3 py-1 border border-border rounded"
            >
              ⏮ First
            </button>
            <button
              onClick={() => tableInstance.previousPage()}
              disabled={!tableInstance.getCanPreviousPage()}
              className="px-3 py-1 border border-border bg-primary text-text"
            >
              ◀ Prev
            </button>
            <button
              onClick={() => tableInstance.nextPage()}
              disabled={!tableInstance.getCanNextPage()}
              className="px-3 py-1 border border-border bg-primary text-text"
            >
              Next ▶
            </button>
            <button
              onClick={() =>
                tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
              }
              disabled={!tableInstance.getCanNextPage()}
              className="px-3 py-1 border border-border bg-primary text-text"
            >
              Last ⏭
            </button>
          </div>
          <span className="text-center flex items-center">
            Page{" "}
            <strong>
              {tableInstance.getState().pagination.pageIndex + 1} of{" "}
              {tableInstance.getPageCount()}
            </strong>
          </span>
          <select
            value={tableInstance.getState().pagination.pageSize}
            onChange={(e) => tableInstance.setPageSize(Number(e.target.value))}
            className="border border-border bg-primary text-text px-2 py-1 rounded"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FinalProjectTable;

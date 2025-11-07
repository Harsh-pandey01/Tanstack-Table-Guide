import React, { useState } from "react";
import data from "/MOCK_DATA";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { basicColumnDef } from "./columns/BasicColumn";

const RowSelectionTable = () => {
  const [rowSelection, setRowSelection] = useState({}); // ✅ stores selected rows

  const table = useReactTable({
    data,
    columns: basicColumnDef,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true, // ✅ enables selection
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {/* 🌟 Selection Count */}
      <p className="mb-2">Selected Rows: {Object.keys(rowSelection).length}</p>

      <table className="border w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {/* ✅ Select All Checkbox */}
              <th>
                <input
                  type="checkbox"
                  {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                  }}
                />
              </th>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border px-4 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {/* ✅ Each Row Checkbox */}
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  {...{
                    checked: row.getIsSelected(),
                    onChange: row.getToggleSelectedHandler(),
                  }}
                />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Example Selected Data */}
      <pre className="mt-4">
        {JSON.stringify(
          table.getSelectedRowModel().flatRows.map((row) => row.original),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default RowSelectionTable;

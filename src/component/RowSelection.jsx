import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

// Mock data
const defaultData = [
  { id: 1, name: "John Doe", age: 25, role: "Developer" },
  { id: 2, name: "Jane Smith", age: 30, role: "Designer" },
  { id: 3, name: "Alex Johnson", age: 27, role: "Manager" },
];

// Columns definition
const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        indeterminate={
          table.getIsSomeRowsSelected() ? "indeterminate" : undefined
        }
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => info.getValue(),
  },
];

export default function SelectableTable() {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true, // ✅ enable row selection
  });

  const selectedRows = table
    .getSelectedRowModel()
    .flatRows.map((row) => row.original);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Row Selection Table</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2 text-left">
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
            <tr
              key={row.id}
              className={row.getIsSelected() ? "bg-blue-50" : ""}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Selected Rows */}
      <div className="mt-4">
        <h3 className="font-medium">Selected Rows:</h3>
        <pre className="bg-gray-100 p-2 rounded text-sm">
          {JSON.stringify(selectedRows, null, 2)}
        </pre>
      </div>
    </div>
  );
}

// Approach 2 :- And good enough approach to wor
// const RowSelectionTable = () => {
//   const [rowSelection, setRowSelection] = useState({}); // ✅ stores selected rows

//   const table = useReactTable({
//     data,
//     columns: basicColumnDef,
//     state: {
//       rowSelection,
//     },
//     onRowSelectionChange: setRowSelection,
//     enableRowSelection: true, // ✅ enables selection
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div>
//       {/* 🌟 Selection Count */}
//       <p className="mb-2">Selected Rows: {Object.keys(rowSelection).length}</p>

//       <table className="border w-full">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {/* ✅ Select All Checkbox */}
//               <th>
//                 <input
//                   type="checkbox"
//                   {...{
//                     checked: table.getIsAllRowsSelected(),
//                     indeterminate: table.getIsSomeRowsSelected(),
//                     onChange: table.getToggleAllRowsSelectedHandler(),
//                   }}
//                 />
//               </th>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id} className="border px-4 py-2">
//                   {flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>

//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {/* ✅ Each Row Checkbox */}
//               <td className="border px-4 py-2">
//                 <input
//                   type="checkbox"
//                   {...{
//                     checked: row.getIsSelected(),
//                     onChange: row.getToggleSelectedHandler(),
//                   }}
//                 />
//               </td>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id} className="border px-4 py-2">
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* ✅ Example Selected Data */}
//       <pre className="mt-4">
//         {JSON.stringify(
//           table.getSelectedRowModel().flatRows.map((row) => row.original),
//           null,
//           2
//         )}
//       </pre>
//     </div>
//   );
// };

// export default RowSelectionTable;

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { basicColumnDef } from "./columns/BasicColumn";
import data from "/MOCK_DATA";
function Basictable() {
  // creating a table instace
  const tableInstance = useReactTable({
    data: data, // providing the table data
    columns: basicColumnDef, // defining the table columns to bind with the data
    getCoreRowModel: getCoreRowModel(), // core model to map the data with the columns and show it on the screen
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

export default Basictable;

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";

import data from "/MOCK_DATA";
import { useState } from "react";
import { SortingTableColumnsDef } from "./columns/SortingTableColumnsDef";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

function SortedTable() {
  const [sorting, setSortingOfTable] = useState([]);

  // creating a table instace
  const tableInstance = useReactTable({
    data: data,
    columns: SortingTableColumnsDef,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // enable sorting in the row
    state: {
      sorting: sorting,
    },
    onSortingChange: setSortingOfTable,
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
                    className="px-2 py-1   border font-semibold  text-red-500"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex  items-center justify-center gap-2.5">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {{
                        desc: <IoIosArrowRoundUp />,
                        asc: <IoIosArrowRoundDown />,
                      }[header.column.getIsSorted()] || (
                        <div className="flex items-center justify-center">
                          <IoIosArrowRoundUp /> <IoIosArrowRoundDown />
                        </div>
                      )}
                    </div>
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

export default SortedTable;

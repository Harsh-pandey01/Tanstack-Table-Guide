export const finalProjectColumnDef = [
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
    header: "User Name",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "DOB",
    accessorKey: "dob",
  },
  {
    header: "Age",
    accessorKey: "age",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
];

export const mergedCellsColumnDef = [
  {
    header: "ID",
    accessorKey: "id",
  },
  //   {
  //     header: "First Name",
  //     accessorKey: "first_name",
  //   },
  //   {
  //     header: "Last Name",
  //     accessorKey: "last_name",
  //   },
  {
    header: "Name",
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

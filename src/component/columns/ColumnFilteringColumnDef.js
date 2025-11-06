export const ColumnFilteringColumnDef = [
  {
    header: "ID",
    accessorKey: "id",
    filterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId);
      return String(cellValue).includes(String(filterValue));
    },
  },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
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

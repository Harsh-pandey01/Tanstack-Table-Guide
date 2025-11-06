export const CellFormattingColumnsDef = [
  {
    header: "ID",
    accessorKey: "id",
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
    cell: ({ row }) => {
      const phone = row.original.phone; // ✅ Get actual value
      return phone ? phone.split("-").join("") : ""; // Remove dashes safely
    },
  },
];

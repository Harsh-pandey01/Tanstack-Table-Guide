import React from "react";
import Basictable from "./component/Basictable";
import MergedCellTable from "./component/MergeCells";

function App() {
  return (
    <div>
      {/* basic table */}
      <Basictable />
      {/* Table cells grouping using the accessorFn */}
      <div className="py-10 text-center text-2xl font-syne">
        Merge Cell using accessor Function
      </div>
      <MergedCellTable />
    </div>
  );
}

export default App;

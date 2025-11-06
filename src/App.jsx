import React from "react";
import Basictable from "./component/Basictable";
import MergedCellTable from "./component/MergeCells";
import GroupingHeader from "./component/GroupingHeader";

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
      {/* Table with the header Gouped */}
      <div className="py-10 text-center text-2xl font-syne">
        Grouping header into one
      </div>
      <GroupingHeader />
    </div>
  );
}

export default App;

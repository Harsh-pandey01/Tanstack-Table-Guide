import React from "react";
import Basictable from "./component/Basictable";
import MergedCellTable from "./component/MergeCells";
import GroupingHeader from "./component/GroupingHeader";
import CellFormatting from "./component/CellFormatting";
import SortedTable from "./component/SortingTable";
import GlobalFiltering from "./component/GlobalFiltering";

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
      {/* Cell Formatting */}
      <div className="py-10 text-center text-2xl font-syne">
        Cell Formating using cell in the column def
      </div>
      <CellFormatting />
      {/* Sorted Table */}
      <div className="py-10 text-center text-2xl font-syne">Sorted Table</div>
      <SortedTable />
      {/* Global Filter Table */}
      <div className="py-10 text-center text-2xl font-syne">
        Global Filter Table
      </div>
      <GlobalFiltering />
    </div>
  );
}

export default App;

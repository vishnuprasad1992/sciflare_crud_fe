import React from "react";

const TableHead = ({ tableHeadings }) => {

  return (
    <tr>
      {tableHeadings.map((tableHeading, index) => (
        <th
          key={`${tableHeading}-${index}`}
          className="text-nowrap fs-14 fs-w700"
        >
          {tableHeading}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;

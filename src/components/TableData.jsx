import React from "react";

const TableData = ({ data, role }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <tr key={`row-${index}`}>
            <td>{index + 1}</td>
            <td>{item?.name || item?.organization_name}</td>
            <td>{item?.mobile || item?.city}</td>
            <td>{item?.email || item?.state}</td>
          </tr>
        );
      })}
    </>
  );
};

export default TableData;

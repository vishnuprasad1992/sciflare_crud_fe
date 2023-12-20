import React from "react";
import TableHead from "./TableHead";
import TableData from "./TableData";
import { Table } from "react-bootstrap";

const TableM = ({ tableHeadings, role, data }) => {
  return (
    <Table responsive>
      <thead>
        <TableHead tableHeadings={tableHeadings} role={role} />
      </thead>
      <tbody>
        <TableData role={role} data={data} />
      </tbody>
    </Table>
  );
};

export default TableM;

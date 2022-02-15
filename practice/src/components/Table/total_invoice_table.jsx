import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table
        style={{ width: 600, marginLeft: 400 }}
        sx={{ minWidth: 300 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Menu</TableCell>
            <TableCell align="left">Total Meals</TableCell>
            <TableCell align="left">Total Amount</TableCell>
            <TableCell align="left">Payment Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key="Total Amount"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">{props.row.menu}</TableCell>
            <TableCell align="left">{props.row.total_meals}</TableCell>
            <TableCell align="left">{props.row.total_amount}</TableCell>
            <TableCell align="left">{props.row.status}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

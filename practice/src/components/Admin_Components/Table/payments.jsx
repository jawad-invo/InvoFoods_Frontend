import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "../../../App.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d70f64",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="left">Payment Proof</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.user_name}
              </StyledTableCell>
              <StyledTableCell align="left">
                <a
                  href="https://cupofcoffee.biz/storage/2018/09/various-coffee-types.jpg"
                  download
                >
                  Download
                </a>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button variant="outlined" color="error">
                  {row.status}
                </Button>
              </StyledTableCell>

              <StyledTableCell align="left">
                {/** Accept or Decline Buttons */}
                {actionButton("Accept", props, "Accepted", row)}
                {actionButton("Decline", props, "Declined", row)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const actionButton = (buttonText, props, status, row) => {
  return (
    <>
      <Button
        style={{
          maxWidth: "50px",
          maxHeight: "20px",
          minWidth: "30px",
          minHeight: "20px",
          fontSize: "10px",
        }}
        variant="outlined"
        color="error"
        onClick={function (event) {
          //   handleClick();
          props.updatePayment(row.id, status);
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};

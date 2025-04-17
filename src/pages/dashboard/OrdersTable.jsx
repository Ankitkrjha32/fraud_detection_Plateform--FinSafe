// OrderTable.jsx (excerpt)
import React, { useState } from "react";
import {
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import Dot from "components/@extended/Dot";
import transactions from "../../assets/data/transactions";
import { v4 as uuidv4 } from 'uuid';

// Import the modal component
import TransactionModal from "./TransactionModal";

// Utility function to create row data
function createData(tracking_no, name, risk_score, status, total_amount, locationStr, location) {
  return { tracking_no, name, risk_score, status, total_amount, locationStr, location };
}

const rows = transactions.transactions.map((transaction) => ({
  id: uuidv4(), // Add unique id
  ...createData(
    transaction.tracking_no,
    transaction.name,
    transaction.risk_score,
    transaction.status,
    transaction.total_amount,
    `${transaction.location.city}, ${transaction.location.country}`,
    transaction.location
  )
}));

const headCells = [
  { id: "tracking_no", align: "left", label: "Transaction No." },
  { id: "name", align: "left", label: "Merchant Name" },
  { id: "risk_score", align: "right", label: "Risk Score" },
  { id: "status", align: "left", label: "Status" },
  { id: "total_amount", align: "right", label: "Total Amount" },
  { id: "locationStr", align: "right", label: "Location" },
];

function OrderTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function OrderStatus({ status }) {
  let color, title;
  switch (status) {
    case 0:
      color = "warning";
      title = "Need Manual Review";
      break;
    case 1:
      color = "success";
      title = "Valid Transaction";
      break;
    case 2:
      color = "error";
      title = "Fraud Detected";
      break;
    default:
      color = "primary";
      title = "None";
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

export default function OrderTable() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <Box>
      <TableContainer sx={{ width: "100%", overflowX: "auto", maxWidth: "100%" }}>
        <Table>
          <OrderTableHead />
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.id} // Use the unique id as key
                onClick={() => handleRowClick(row)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>
                  <Link color="secondary">{row.tracking_no}</Link>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.risk_score}</TableCell>
                <TableCell>
                  <OrderStatus status={row.status} />
                </TableCell>
                <TableCell align="right">
                  <NumericFormat value={row.total_amount} displayType="text" thousandSeparator prefix="₹" />
                </TableCell>
                <TableCell align="right">{row.locationStr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedTransaction && (
        <TransactionModal
          open={Boolean(selectedTransaction)}
          onClose={handleCloseModal}
          transaction={selectedTransaction}
          transactions={transactions.transactions}  // Pass full transactions for graph connections
        />
      )}
    </Box>
  );
}
